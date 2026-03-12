import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>لوحة التحكم الرئيسية</h1>
        <p className="dashboard-subtitle">مركز التحكم والمراقبة الشامل</p>
      </header>

      <section className="dashboard-description">
        <div className="description-card">
          <h2>أهمية لوحة التحكم</h2>
          <p>
            لوحة التحكم هي واجهة مركزية توفر عرضاً شاملاً ومتكاملاً لجميع البيانات والمعلومات الهامة في النظام.
            تعتبر الأداة الأساسية لاتخاذ القرارات المستنيرة والتحكم الفعال في جميع عمليات المنظمة.
          </p>
        </div>

        <div className="benefits-section">
          <h3>المزايا الرئيسية</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>📊 عرض مرئي للبيانات</h4>
              <p>تحويل الأرقام والإحصائيات المعقدة إلى رسوم بيانية واضحة وسهلة الفهم</p>
            </div>
            
            <div className="benefit-item">
              <h4>⚡ تحديث فوري</h4>
              <p>بيانات مباشرة ومحدثة بشكل مستمر لضمان اتخاذ القرارات الصحيحة في الوقت المناسب</p>
            </div>
            
            <div className="benefit-item">
              <h4>🎯 تتبع الأداء</h4>
              <p>مراقبة مؤشرات الأداء الرئيسية (KPIs) وتحليل الاتجاهات والأنماط</p>
            </div>
            
            <div className="benefit-item">
              <h4>🔍 تحليل شامل</h4>
              <p>أدوات تحليل متقدمة لفهم البيانات بشكل أعمق واستخلاص رؤى قيمة</p>
            </div>
            
            <div className="benefit-item">
              <h4>📱 سهولة الوصول</h4>
              <p>وصول آمن ومريح من أي جهاز وفي أي وقت لضمان الاستمرارية في العمل</p>
            </div>
            
            <div className="benefit-item">
              <h4>🚀 زيادة الإنتاجية</h4>
              <p>توفير الوقت والجهد من خلال أتمتة التقارير وعرض المعلومات بشكل منظم</p>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h3>مميزات إضافية</h3>
          <ul className="features-list">
            <li><strong>تخصيص متقدم:</strong> إمكانية تخصيص الواجهة حسب احتياجات المستخدم</li>
            <li><strong>تقارير تفاعلية:</strong> إنشاء تقارير ديناميكية وقابلة للتصدير</li>
            <li><strong>تنبيهات ذكية:</strong> إشعارات فورية للتغيرات المهمة في البيانات</li>
            <li><strong>أمان عالي:</strong> حماية البيانات والتحكم في صلاحيات الوصول</li>
            <li><strong>تكامل سهل:</strong> ربط مع الأنظمة الأخرى لتبادل البيانات بسلاسة</li>
          </ul>
        </div>

        <div className="conclusion">
          <p>
            لوحة التحكم ليست مجرد أداة عرض للبيانات، بل هي شريك استراتيجي يساعد في تحسين الأداء،
            زيادة الكفاءة، وتحقيق الأهداف التنظيمية بفعالية واحترافية.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;