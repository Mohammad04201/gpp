# Git Workflow - رفع المشروع على Branch منفصلة

## 1. إنشاء Branch جديدة

```bash
# التأكد من أنك في المجلد الرئيسي
cd c:\Users\LOQ\OneDrive\Desktop\FrontEnd\GP

# سحب آخر التحديثات من main
git pull origin main

# إنشاء branch جديدة
 git checkout -b feature/developer-profile-refactor
```

## 2. إضافة الملفات المعدلة

```bash
# إضافة الملفات الجديدة والمعدلة
git add src/components/DevloperP/

# إضافة ملف README
git add README-DEVELOPER-REFACTOR.md

# التحقق من الحالة
 git status
```

## 3. عمل Commit

```bash
# عمل commit مع رسالة واضحة
 git commit -m "refactor: إعادة هيكلة مكونات المطورين وإضافة نظام التعديل الديناميكي

- إعادة تسمية المكونات: إزالة لاحقة Page
- إنشاء مجلد user/ لإدارة البيانات الديناميكية
- إضافة نظام رفع السيرة الذاتية (CV)
- إضافة نافذة تعديل شفافة مع 5 أقسام
- تحسين تصميم صفحة الملف الشخصي
- إضافة نسبة اكتمال الملف التفاعلية"
```

## 4. رفع الـ Branch

```bash
# رفع الـ Branch على GitHub
git push origin feature/developer-profile-refactor
```

## 5. إنشاء Pull Request (اختياري)

```bash
# فتح الرابط لإنشاء Pull Request
# https://github.com/[username]/[repo]/compare/main...feature/developer-profile-refactor
```

## 6. العودة للـ Main (إذا لزم الأمر)

```bash
# العودة للـ main
git checkout main

# أو البقاء في الـ Branch الجديدة
 git checkout feature/developer-profile-refactor
```

## الأوامر في PowerShell (Windows)

```powershell
# تنفيذ جميع الخطوات مرة واحدة
Set-Location "c:\Users\LOQ\OneDrive\Desktop\FrontEnd\GP"
git pull origin main
git checkout -b feature/developer-profile-refactor
git add src/components/DevloperP/
git add README-DEVELOPER-REFACTOR.md
git commit -m "refactor: إعادة هيكلة مكونات المطورين"
git push origin feature/developer-profile-refactor
```

## ملاحظات مهمة

- ✅ **لا تدفع للـ main** - كل التعديلات في الـ Branch المنفصلة
- ✅ يمكنك **إنشاء Pull Request** لاحقاً لدمج التعديلات
- ✅ الـ Branch تحتوي على جميع التعديلات موثقة في README
- ✅ يمكن العمل على الـ Branch بشكل مستقل

## في حالة وجود conflicts

```bash
# سحب آخر التحديثات
git fetch origin

# دمج main في الـ Branch
git merge origin/main

# حل التعارضات ثم
git add .
git commit -m "resolve: حل تعارضات الدمج"
```
