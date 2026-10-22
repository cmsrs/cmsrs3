<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Tag;

use App\Models\Cmsrs\Tag\TagCategory;
use App\Models\Cmsrs\Tag\TagCategoryTranslation;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TagCategoryService
{
    /**
     * @return array<string, list<array{id: int, name: array<string, string>, tags: list<array{id: int, name: array<string, string>}>}>>
     */
    public function getAllCategoriesWithTagsGroupedByEntityType(): array
    {
        return $this->toApiByEntityType($this->getAllTagCategories());
    }

    /**
     * @return Collection<int, TagCategory>
     */
    private function getAllTagCategories(): Collection
    {
        return TagCategory::with([
            'translations',
            'tags.translations',
        ])->get();
    }

    /**
     * Group tag categories by entity type and convert them to API format.
     *
     * @param  Collection<int, TagCategory>  $categories
     * @return array<string, list<array{id: int, name: array<string, string>, tags: list<array{id: int, name: array<string, string>}>}>>
     */
    private function toApiByEntityType(Collection $categories): array
    {
        $data = [];

        foreach ($categories as $category) {
            $tags = [];

            foreach ($category->tags as $tag) {
                $tags[] = [
                    'id' => $tag->id,
                    'name' => $tag->translations->pluck('value', 'lang')->all(),
                ];
            }

            $entityType = $category->entity_type->value;
            $data[$entityType] ??= [];
            $data[$entityType][] = [
                'id' => $category->id,
                'name' => $category->translations->pluck('value', 'lang')->all(),
                'tags' => $tags,
            ];
        }

        return $data;
    }

    public function getTagCategory(int $id): ?TagCategory
    {
        return TagCategory::with('translations')->find($id);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function createTagCategory(array $data): TagCategory
    {
        return DB::transaction(function () use ($data) {
            $category = TagCategory::create([
                'entity_type' => $data['entity_type'],
            ]);

            $this->saveTranslations(
                $category,
                $data['name']
            );

            return $category;
        });
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function updateTagCategory(
        TagCategory $category,
        array $data
    ): bool {
        return DB::transaction(function () use ($category, $data) {
            $category->update([
                'entity_type' => $data['entity_type'],
            ]);

            $this->saveTranslations(
                $category,
                $data['name']
            );

            return true;
        });
    }

    public function deleteTagCategory(TagCategory $category): bool
    {
        return $category->delete() === true;
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array{success: bool, error?: string}
     */
    public function checkIsDuplicateName(
        array $data,
        ?int $id = null
    ): array {
        $out = ['success' => true];

        foreach ($data['name'] as $lang => $name) {
            $query = TagCategoryTranslation::query()
                ->where('lang', $lang);

            if ($id !== null) {
                $query->where('tag_category_id', '!=', $id);
            }

            $translations = $query->get();

            foreach ($translations as $translation) {
                if (
                    Str::slug($translation->value, '-') ===
                    Str::slug($name, '-')
                ) {
                    return [
                        'success' => false,
                        'error' => "Duplicate tag category: {$name} ({$lang})",
                    ];
                }
            }
        }

        return $out;
    }

    /**
     * @param  array<string, string>  $names
     */
    private function saveTranslations(
        TagCategory $category,
        array $names
    ): void {
        foreach ($names as $lang => $value) {
            $translation = $category->translations()
                ->where('lang', $lang)
                ->first();

            if ($translation) {
                $translation->update([
                    'value' => $value,
                ]);

                continue;
            }

            $category->translations()->create([
                'lang' => $lang,
                'value' => $value,
            ]);
        }
    }

    /**
     * Convert database structure to API structure.
     *
     * @return array<string, mixed>
     */
    public function toApi(TagCategory $category): array
    {
        $category->loadMissing('translations');

        $out = [
            'id' => $category->id,
            'entity_type' => $category->entity_type->value,
            'name' => [],
        ];

        foreach ($category->translations as $translation) {
            $out['name'][$translation->lang] = $translation->value;
        }

        return $out;
    }
}
