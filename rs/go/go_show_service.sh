
dir=app/Services/Cmsrs
tree $dir
find $dir -type f -name "*.php" -print -exec echo -e "\n===== {} =====\n" \; -exec cat {} \;
