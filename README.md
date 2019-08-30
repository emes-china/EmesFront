# 密钥 RSA公钥加密解密

-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDhSzPPnFn41iaz+t4tI4kbaXNu
NFOsI8hFeCYtlwPFKRbETHbBS10bMvUbOWLFtRgZV3L924GQ9orbomEmJ1nWyaSO
8iBbZAyiWUP5PJJh/b9kHj1MMwG712bGfYYPdjkRprNpzU9w4UBzUMKKUoHU4c/G
bb4XeBK9LNTPWQL4YwIDAQAB
-----END PUBLIC KEY-----

fvD4zeQKw67tN/bhxuXOVhHoftG6m6u0lFIsoOGscUiow/oOO6xc1N6VWJmZPKieP+lf10o6M7CrfG9vdAoP5w8pDMeEAxxIWxctucV9LhlIE5+tvI0EwfN125PrUFDqSeVKUobgS1Vps4PRVv/iqhwgEvEMO6tK9Kd+XNBkcXM=


# 根据swagger生成service & model
##命名格式 --additional-properties modelPropertyNaming=PascalCase 
java -jar codegen.jar generate -i http://localhost:280/swagger/Emes.Erp.ISystem/swagger.json -l emes-angular -o ./src/app/routes/system/api --additional-properties providedInRoot=true --additional-properties ngVersion=8.1.1 

#ec模式
java -jar codegen.jar generate -i http://localhost:280/swagger/Emes.Erp.ISystem.ec/swagger.json -l emes-angular -o ./src/app/routes/system/api --additional-properties providedInRoot=true  --additional-properties ngVersion=8.1.1 