function getIconAndColor(type) {
  switch (type) {
    case 'yt':
      return {
        color: '#ff0033',
        svg: `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.498 6.186a3.004 3.004 0 0 0-2.116-2.127C19.44 3.5 12 3.5 12 3.5s-7.44 0-9.382.559A3.004 3.004 0 0 0 .502 6.186C0 8.14 0 12 0 12s0 3.86.502 5.814a3.004 3.004 0 0 0 2.116 2.127C4.56 20.5 12 20.5 12 20.5s7.44 0 9.382-.559a3.004 3.004 0 0 0 2.116-2.127C24 15.86 24 12 24 12s0-3.86-.502-5.814ZM9.75 15.568V8.432L15.818 12 9.75 15.568Z"/>
          </svg>`,
      };
    case 'ig':
      return {
        color: '#e1306c',
        svg: `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403.61.223 1.045.49 1.503.948.458.458.725.893.948 1.503.163.458.349 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a3.91 3.91 0 0 1-.948 1.503 3.91 3.91 0 0 1-1.503.948c-.458.163-1.258.349-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a3.91 3.91 0 0 1-1.503-.948 3.91 3.91 0 0 1-.948-1.503c-.163-.458-.349-1.258-.403-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428.223-.61.49-1.045.948-1.503.458-.458.893-.725 1.503-.948.458-.163 1.258-.349 2.428-.403C8.416 2.175 8.796 2.163 12 2.163Zm0 1.62c-3.154 0-3.523.012-4.767.069-.98.045-1.513.208-1.868.346-.47.182-.805.398-1.158.751-.353.353-.569.688-.751 1.158-.138.355-.301.888-.346 1.868-.057 1.244-.069 1.613-.069 4.767s.012 3.523.069 4.767c.045.98.208 1.513.346 1.868.182.47.398.805.751 1.158.353.353.688.569 1.158.751.355.138.888.301 1.868.346 1.244.057 1.613.069 4.767.069s3.523-.012 4.767-.069c.98-.045 1.513-.208 1.868-.346.47-.182.805-.398 1.158-.751.353-.353.569-.688.751-1.158.138-.355.301-.888.346-1.868.057-1.244.069-1.613.069-4.767s-.012-3.523-.069-4.767c-.045-.98-.208-1.513-.346-1.868-.182-.47-.398-.805-.751-1.158a2.673 2.673 0 0 0-1.158-.751c-.355-.138-.888-.301-1.868-.346-1.244-.057-1.613-.069-4.767-.069Zm0 3.49a5.727 5.727 0 1 1 0 11.455 5.727 5.727 0 0 1 0-11.455Zm0 1.62a4.107 4.107 0 1 0 0 8.215 4.107 4.107 0 0 0 0-8.215Zm5.77-2.67a1.332 1.332 0 1 1 0 2.665 1.332 1.332 0 0 1 0-2.665Z"/>
          </svg>`,
      };
    case 'site':
    case 'www':
      return {
        color: '#0ea5e9',
        svg: `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm7.938 9h-3.17a15.957 15.957 0 0 0-1.21-5.043A8.013 8.013 0 0 1 19.938 11ZM8.442 11H4.062a8.013 8.013 0 0 1 4.38-5.043A15.957 15.957 0 0 0 8.442 11Zm0 2a13.98 13.98 0 0 0 1.078 4.672A8.013 8.013 0 0 1 4.062 13h4.38Zm6.116 0h3.78a8.013 8.013 0 0 1-5.496 4.672A13.98 13.98 0 0 0 14.558 13ZM14.1 11h-4.2c.114-1.83.65-3.595 1.55-5.043.268-.433.534-.78.75-1.02.216.24.482.587.75 1.02.9 1.448 1.436 3.213 1.55 5.043Zm-4.2 2h4.2c-.114 1.83-.65 3.595-1.55 5.043-.268.433-.534.78-.75 1.02-.216-.24-.482-.587-.75-1.02-.9-1.448-1.436-3.213-1.55-5.043Z"/>
          </svg>`,
      };
    default:
      return { color: '#a7f3d0', svg: '' };
  }
}

const TARGET_YT_URL = 'https://youtu.be/5bUa1w24ASc?si=PnMm_0EX2KUEhkXZ';

const defaultLinks = [
  { id: 'yt', title: 'YouTube', url: TARGET_YT_URL, icon: 'YT' },
  { id: 'ig', title: 'Instagram', url: 'https://instagram.com', icon: 'IG' },
  { id: 'site', title: 'Website', url: 'https://example.com', icon: 'WWW' },
];

const state = {
  theme: localStorage.getItem('theme') || 'dark',
  links: JSON.parse(localStorage.getItem('links') || 'null') || defaultLinks,
  clicks: JSON.parse(localStorage.getItem('clicks') || '{}'),
  profileName: localStorage.getItem('profileName') || 'cobacoba aja',
  profileBio: localStorage.getItem('profileBio') || 'Bio singkat tentang kamu.',
};

function save() {
  localStorage.setItem('links', JSON.stringify(state.links));
  localStorage.setItem('clicks', JSON.stringify(state.clicks));
  localStorage.setItem('theme', state.theme);
  localStorage.setItem('profileName', state.profileName);
  localStorage.setItem('profileBio', state.profileBio);
}

// Pastikan link YouTube diarahkan ke TARGET_YT_URL, termasuk data yang sudah tersimpan di localStorage
(function enforceYouTubeLink() {
  const yt = state.links.find((l) => l.id === 'yt');
  if (yt) {
    if (yt.url !== TARGET_YT_URL) {
      yt.url = TARGET_YT_URL;
      save();
    }
  } else {
    state.links.unshift({ id: 'yt', title: 'YouTube', url: TARGET_YT_URL, icon: 'YT' });
    save();
  }
})();

function setTheme(next) {
  state.theme = next;
  document.documentElement.style.setProperty('--bg', next === 'dark' ? '#0f172a' : '#f8fafc');
  document.documentElement.style.setProperty('--card', next === 'dark' ? '#111827' : '#ffffff');
  document.documentElement.style.setProperty('--text', next === 'dark' ? '#e5e7eb' : '#0f172a');
  document.documentElement.style.setProperty('--muted', next === 'dark' ? '#9ca3af' : '#334155');
  if (next === 'dark') {
    document.documentElement.style.setProperty('--link-bg', '#0b1220');
    document.documentElement.style.setProperty('--link-border', '#ffffff14');
    document.documentElement.style.setProperty('--link-hover-bg', '#0d1424');
    document.documentElement.style.setProperty('--btn-bg', '#0b1220');
    document.documentElement.style.setProperty('--btn-border', '#ffffff1a');
    document.documentElement.style.setProperty('--btn-hover-bg', '#0d1424');
  } else {
    document.documentElement.style.setProperty('--link-bg', '#f1f5f9');
    document.documentElement.style.setProperty('--link-border', '#0f172a1a');
    document.documentElement.style.setProperty('--link-hover-bg', '#e2e8f0');
    document.documentElement.style.setProperty('--btn-bg', '#f1f5f9');
    document.documentElement.style.setProperty('--btn-border', '#0f172a1a');
    document.documentElement.style.setProperty('--btn-hover-bg', '#e2e8f0');
  }
  save();
}

function render() {
  const list = document.getElementById('links');
  list.innerHTML = '';
  for (const link of state.links) {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'link';
    a.setAttribute('role', 'listitem');
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    const icon = document.createElement('div');
    icon.className = 'icon';
    const iconData = getIconAndColor(link.id);
    if (iconData.svg) {
      icon.innerHTML = iconData.svg;
      icon.style.color = iconData.color;
    } else {
      icon.textContent = link.icon;
    }

    const title = document.createElement('div');
    title.textContent = link.title;

    const right = document.createElement('div');
    right.className = 'right';
    right.textContent = (state.clicks[link.id] || 0) + ' klik';

    a.appendChild(icon);
    a.appendChild(title);
    a.appendChild(right);

    a.addEventListener('click', () => {
      state.clicks[link.id] = (state.clicks[link.id] || 0) + 1;
      save();
      renderCounts();
    });

    a.draggable = true;
    a.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', link.id);
    });
    a.addEventListener('dragover', (e) => e.preventDefault());
    a.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData('text/plain');
      if (!draggedId || draggedId === link.id) return;
      const from = state.links.findIndex((l) => l.id === draggedId);
      const to = state.links.findIndex((l) => l.id === link.id);
      const [moved] = state.links.splice(from, 1);
      state.links.splice(to, 0, moved);
      save();
      render();
      renderCounts();
    });

    list.appendChild(a);
  }
}

function renderCounts() {
  const container = document.getElementById('counts');
  container.innerHTML = '';
  state.links.forEach((l) => {
    const chip = document.createElement('div');
    chip.className = 'count';
    chip.textContent = `${l.title}: ${state.clicks[l.id] || 0}`;
    container.appendChild(chip);
  });
}

// Particle system
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;

  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random position and delay
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = Math.random() * 4 + 6 + 's';

    particlesContainer.appendChild(particle);
  }
}

// Share functionality
function shareProfile() {
  const url = window.location.href;
  const title = document.getElementById('profileName')?.textContent || 'Profil Saya';
  const text = document.getElementById('profileBio')?.textContent || 'Cek profil saya!';

  // Try native share API first
  if (navigator.share && navigator.canShare) {
    const shareData = {
      title: title,
      text: text,
      url: url,
    };

    if (navigator.canShare(shareData)) {
      navigator.share(shareData).catch((err) => {
        console.log('Native share failed:', err);
        fallbackShare();
      });
      return;
    }
  }

  // Fallback to clipboard copy
  fallbackShare();
}

function fallbackShare() {
  const url = window.location.href;
  const text = `${document.getElementById('profileName')?.textContent || 'Profil Saya'}\n${url}`;

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast('Link berhasil disalin!');
      })
      .catch(() => {
        promptShare(text);
      });
  } else {
    promptShare(text);
  }
}

function promptShare(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast('Link berhasil disalin!');
}

// QR Code functionality
function showQRCode() {
  const modal = document.getElementById('qrModal');
  const qrCode = document.getElementById('qrCode');

  if (!modal || !qrCode) return;

  const url = window.location.href;

  // Multiple free QR code API options
  const qrApis = [
    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`,
    `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(url)}`,
    `https://qr.ae/api/?size=200&data=${encodeURIComponent(url)}`,
    `https://api.qrcode-monkey.com/qr/custom?size=200&data=${encodeURIComponent(url)}`,
  ];

  // Use the first API, fallback to others if needed
  const qrUrl = qrApis[0];

  const img = document.createElement('img');
  img.src = qrUrl;
  img.alt = 'QR Code';
  img.style.cssText = 'width: 100%; height: 100%; object-fit: contain;';

  // Fallback if image fails to load
  img.onerror = function () {
    console.log('QR API failed, trying fallback...');
    const fallbackIndex = qrApis.indexOf(this.src) + 1;
    if (fallbackIndex < qrApis.length) {
      this.src = qrApis[fallbackIndex];
    } else {
      // If all APIs fail, show error message
      qrCode.innerHTML = '<p style="color: var(--text); text-align: center;">Gagal memuat QR Code<br><small>Silakan coba lagi</small></p>';
    }
  };

  qrCode.innerHTML = '';
  qrCode.appendChild(img);
  modal.classList.add('show');
}

function hideQRCode() {
  const modal = document.getElementById('qrModal');
  if (modal) {
    modal.classList.remove('show');
  }
}

// Copy link functionality
function copyLink() {
  const url = window.location.href;

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showToast('Link berhasil disalin!');
      })
      .catch(() => {
        fallbackCopy(url);
      });
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast('Link berhasil disalin!');
}

// Toast notification
function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--card);
    border: 1px solid var(--link-border);
    color: var(--text);
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 1001;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;

  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => {
    toast.style.opacity = '1';
  }, 100);

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleTheme');
  const audioEl = document.getElementById('bgAudio');
  const applyPressed = () => {
    const pressed = state.theme === 'dark';
    // pressed true indicates moon shown (dark mode)
    toggleBtn.setAttribute('aria-pressed', String(pressed));
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setTheme(state.theme === 'dark' ? 'light' : 'dark');
      applyPressed();
      // micro-bounce pulse
      toggleBtn.classList.remove('pulse');
      // force reflow to restart animation
      void toggleBtn.offsetWidth;
      toggleBtn.classList.add('pulse');
    });
  }

  // Autoplay background audio; fall back to first user interaction if blocked
  const tryPlayAudio = async () => {
    if (!audioEl) return;
    try {
      await audioEl.play();
    } catch (_) {
      const onFirstInteract = async () => {
        try {
          await audioEl.play();
        } finally {
          document.removeEventListener('click', onFirstInteract);
          document.removeEventListener('touchstart', onFirstInteract);
          document.removeEventListener('keydown', onFirstInteract);
        }
      };
      document.addEventListener('click', onFirstInteract, { once: true });
      document.addEventListener('touchstart', onFirstInteract, { once: true });
      document.addEventListener('keydown', onFirstInteract, { once: true });
    }
  };

  setTheme(state.theme);
  // apply profile info
  const nameEl = document.getElementById('profileName');
  const bioEl = document.getElementById('profileBio');
  if (nameEl) nameEl.textContent = state.profileName;
  if (bioEl) bioEl.textContent = state.profileBio;

  // inline edit: double click to edit, Enter/blur to save
  const makeEditable = (el, key) => {
    if (!el) return;
    el.setAttribute('tabindex', '0');
    el.style.cursor = 'pointer';
    el.title = 'Double click untuk edit';

    const startEdit = () => {
      const current = state[key];
      const input = document.createElement('input');
      input.type = 'text';
      input.value = current;
      input.className = el.className;
      input.style.cssText = `
        width: 100%;
        text-align: center;
        background: transparent;
        border: none;
        outline: none;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0;
        margin: 0;
        border-bottom: 2px solid var(--accent);
      `;

      // Store original content
      const originalContent = el.innerHTML;
      el.innerHTML = '';
      el.appendChild(input);
      input.focus();
      input.select();

      const finish = () => {
        const newValue = input.value.trim();
        if (newValue && newValue !== current) {
          state[key] = newValue;
          save();
          el.textContent = newValue;
          showToast(`${key === 'profileName' ? 'Nama' : 'Bio'} berhasil diubah!`);
        } else if (newValue === '') {
          // Allow empty bio but not empty name
          if (key === 'profileBio') {
            state[key] = newValue;
            save();
            el.textContent = newValue;
            showToast('Bio berhasil diubah!');
          } else {
            el.innerHTML = originalContent;
          }
        } else {
          el.innerHTML = originalContent;
        }
        // Rebind events
        makeEditable(el, key);
      };

      const cancel = () => {
        el.innerHTML = originalContent;
        makeEditable(el, key);
      };

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          finish();
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          cancel();
        }
      });

      input.addEventListener('blur', finish);

      // Prevent double click during editing
      el.removeEventListener('dblclick', startEdit);
    };

    el.addEventListener('dblclick', startEdit);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && document.activeElement === el) {
        e.preventDefault();
        startEdit();
      }
    });
  };

  // Make elements editable
  if (nameEl) {
    console.log('Making name editable:', nameEl);
    makeEditable(nameEl, 'profileName');
  }
  if (bioEl) {
    console.log('Making bio editable:', bioEl);
    makeEditable(bioEl, 'profileBio');
  }

  applyPressed();
  tryPlayAudio();
  render();
  renderCounts();
  createParticles();
  playAudioOnInteraction();

  // Action buttons
  const shareBtn = document.getElementById('shareBtn');
  const qrBtn = document.getElementById('qrBtn');
  const copyBtn = document.getElementById('copyBtn');
  const closeQrBtn = document.getElementById('closeQr');

  console.log('Setting up action buttons:', { shareBtn, qrBtn, copyBtn, closeQrBtn });

  if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Share button clicked');
      shareProfile();
    });
  }

  if (qrBtn) {
    qrBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('QR button clicked');
      showQRCode();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Copy button clicked');
      copyLink();
    });
  }

  if (closeQrBtn) {
    closeQrBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Close QR button clicked');
      hideQRCode();
    });
  }

  // Close QR modal when clicking outside
  const qrModal = document.getElementById('qrModal');
  if (qrModal) {
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) {
        hideQRCode();
      }
    });
  }
});

// Audio interaction handler
function playAudioOnInteraction() {
  const audioEl = document.getElementById('bgAudio');
  if (!audioEl) return;

  const playAudio = async () => {
    try {
      if (audioEl.paused) {
        await audioEl.play();
      }
    } catch (error) {
      console.log('Audio play failed:', error);
    }
  };

  // Play audio on first user interaction
  const onFirstInteract = () => {
    playAudio();
    document.removeEventListener('click', onFirstInteract);
    document.removeEventListener('touchstart', onFirstInteract);
    document.removeEventListener('keydown', onFirstInteract);
  };

  document.addEventListener('click', onFirstInteract, { once: true });
  document.addEventListener('touchstart', onFirstInteract, { once: true });
  document.addEventListener('keydown', onFirstInteract, { once: true });
}

// Sync vinyl rotation with audio play/pause
// (vinyl sync removed)
