  const PHONE = '916351695304';

  const serviceData = {
    insurance: {
      icon: '🛡️',
      iconClass: 'icon-blue',
      title: 'ઇન્સ્યોરન્સ (વીમા)',
      subtitle: 'Life, Health & Vehicle Insurance',
      items: ['LIC / લાઇફ ઇન્શ્યોરન્સ','પેન્શન પ્લાન','ટર્મ વીમો','મેડિક્લેમ','પર્સનલ એક્સિડન્ટ વીમો (PA)','ટૂ વ્હીલર વીમો','ફોર વ્હીલર વીમો','કોમર્શિયલ વ્હીકલ વીમો'],
      waMsg: 'નમસ્કાર! મને ઇન્સ્યોરન્સ (વીમા) સેવા વિશે વધુ માહિતી જોઈએ છે.'
    },
    loan: {
      icon: '🏦',
      iconClass: 'icon-green',
      title: 'લોન & ફાઇનાન્સ',
      subtitle: 'Vehicle, Home, Personal & Business Loans',
      items: ['વ્હીકલ લોન (નવા/જૂના)','હોમ લોન','મોર્ગેઝ લોન','પર્સનલ લોન','બીઝનેસ લોન','ગોલ્ડ લોન','ક્રેડિટ કાર્ડ','CC / OD'],
      waMsg: 'નમસ્કાર! મને લોન & ફાઇનાન્સ સેવા વિશે વધુ માહિતી જોઈએ છે.'
    },
    invest: {
      icon: '📈',
      iconClass: 'icon-gold',
      title: 'ઇન્વેસ્ટમેન્ટ (રોકાણ)',
      subtitle: 'MF, SIP, FD, Bonds & Stock Market',
      items: ['LIC પ્લાન','મ્યુચ્યુઅલ ફંડ','SIP','SWP','બોન્ડ','ફિક્સ ડિપોઝિટ (FD)','સ્ટોક માર્કેટ'],
      waMsg: 'નમસ્કાર! મને ઇન્વેસ્ટમેન્ટ (રોકાણ) સેવા વિશે વધુ માહિતી જોઈએ છે.'
    },
    tax: {
      icon: '📋',
      iconClass: 'icon-navy',
      title: 'ટેક્સ રિટર્ન',
      subtitle: 'GST, Income Tax, TDS & Registrations',
      items: ['GST રિટર્ન ફાઇલિંગ','ઇનકમ ટેક્સ રિટર્ન ફાઇલિંગ','TDS રિટર્ન ફાઇલિંગ','GST રજિસ્ટ્રેશન','Food License','MSME / Udyam રજિસ્ટ્રેશન'],
      waMsg: 'નમસ્કાર! મને ટેક્સ રિટર્ન સેવા વિશે વધુ માહિતી જોઈએ છે.'
    },
    other: {
      icon: '⭐',
      iconClass: 'icon-coral',
      title: 'અન્ય સેવાઓ',
      subtitle: 'PAN Card, Passport & Digital Signature',
      items: ['પાન કાર્ડ','પાસપોર્ટ','ડિજિટલ સિગ્નેચર'],
      waMsg: 'નમસ્કાર! મને અન્ય સેવાઓ વિશે વધુ માહિતી જોઈએ છે.'
    }
  };

  function openModal(key) {
    const d = serviceData[key];
    document.getElementById('modalIcon').className = 'modal-icon-wrap ' + d.iconClass;
    document.getElementById('modalIcon').textContent = d.icon;
    document.getElementById('modalTitle').textContent = d.title;
    document.getElementById('modalSubtitle').textContent = d.subtitle;
    const list = document.getElementById('modalList');
    list.innerHTML = d.items.map(i => `<li>${i}</li>`).join('');
    document.getElementById('modalWABtn').href = `https://wa.me/${PHONE}?text=${encodeURIComponent(d.waMsg)}`;
    document.getElementById('serviceModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('serviceModal').classList.remove('open');
    document.body.style.overflow = '';
  }

  function handleOverlayClick(e) {
    if (e.target === document.getElementById('serviceModal')) closeModal();
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const phone = document.getElementById('fphone').value.trim();
    const service = document.getElementById('fservice').value;
    if (!name || !phone || !service) return;
    document.getElementById('formSuccess').style.display = 'block';
    this.reset();
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
