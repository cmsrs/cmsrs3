secret=$(grep  "RS_SECRET" .env | awk -F "=" '{ print $2 }')
#echo $secret


curl  -H "Accept:application/json" -H "Content-Type:application/json" -XPOST  "http://cmsrs3.loc/api/register" -d '{ 
    "name": "admin", 
    "email": "admin@cmsrs.pl", 
    "password": "cmsrs123",
    "secret": "'$secret'"

}'
