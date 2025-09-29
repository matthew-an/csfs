/**
 * Customer Review Image Gallery
 * Provides full-size image viewing with navigation for customer review images
 */

class CustomerReviewGallery {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.images = [];
    this.currentIndex = 0;
    this.modal = null;
    this.modalImage = null;
    this.prevButton = null;
    this.nextButton = null;
    this.counter = null;
    this.closeButton = null;
    
    this.init();
  }

  detectLanguage() {
    const path = window.location.pathname;
    return path.startsWith('/en/') ? 'en' : 'zh';
  }

  init() {
    this.createModal();
    this.bindEvents();
    this.collectImages();
  }

  createModal() {
    const modalHTML = `
      <div id="customer-review-gallery-modal" class="gallery-modal">
        <div class="gallery-modal-overlay"></div>
        
        <button class="gallery-modal-close" aria-label="${this.currentLang === 'zh' ? '关闭图库' : 'Close gallery'}">&times;</button>
        
        <div class="gallery-navigation">
          <button class="gallery-nav-btn gallery-prev" aria-label="${this.currentLang === 'zh' ? '上一张图片' : 'Previous image'}">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="gallery-nav-btn gallery-next" aria-label="${this.currentLang === 'zh' ? '下一张图片' : 'Next image'}">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div class="gallery-modal-content">
          <div class="gallery-image-container">
            <img id="gallery-modal-image" src="" alt="${this.currentLang === 'zh' ? '客户反馈' : 'Customer Review'}" />
            <div class="gallery-loading">
              <div class="gallery-spinner"></div>
            </div>
          </div>
          
          <div class="gallery-info">
            <div class="gallery-counter">
              <span id="gallery-current">1</span> / <span id="gallery-total">1</span>
            </div>
            <div class="gallery-title">
              ${this.currentLang === 'zh' ? '客户反馈图片' : 'Customer Review Images'}
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Get modal elements
    this.modal = document.getElementById('customer-review-gallery-modal');
    this.modalImage = document.getElementById('gallery-modal-image');
    this.prevButton = document.querySelector('.gallery-prev');
    this.nextButton = document.querySelector('.gallery-next');
    this.counter = {
      current: document.getElementById('gallery-current'),
      total: document.getElementById('gallery-total')
    };
    this.closeButton = document.querySelector('.gallery-modal-close');
  }

  collectImages() {
    // Find all customer review images
    const imageElements = document.querySelectorAll('.customer-review-image');
    this.images = Array.from(imageElements).map((img, index) => ({
      src: img.src,
      alt: img.alt || `${this.currentLang === 'zh' ? '客户反馈' : 'Customer Review'} ${index + 1}`,
      element: img
    }));
    
    // Update total counter
    if (this.counter.total) {
      this.counter.total.textContent = this.images.length;
    }
  }

  bindEvents() {
    // Image click handlers
    document.addEventListener('click', (e) => {
      if (e.target.matches('.customer-review-image')) {
        e.preventDefault();
        const index = Array.from(document.querySelectorAll('.customer-review-image')).indexOf(e.target);
        this.openGallery(index);
      }
    });

    // Modal close handlers
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.closeGallery());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal || e.target.classList.contains('gallery-modal-overlay')) {
        this.closeGallery();
      }
    });

    // Navigation handlers
    if (this.prevButton) {
      this.prevButton.addEventListener('click', () => this.showPrevious());
    }

    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => this.showNext());
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('show')) return;

      switch (e.key) {
        case 'Escape':
          this.closeGallery();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.showPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.showNext();
          break;
      }
    });

    // Touch/swipe support for mobile
    this.addTouchSupport();

    // Handle window resize for responsive scaling
    window.addEventListener('resize', () => {
      if (this.modal.classList.contains('show') && this.modalImage.src) {
        this.applyResponsiveScaling();
      }
    });
  }

  addTouchSupport() {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    this.modalImage.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    this.modalImage.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const minSwipeDistance = 50;

      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          this.showPrevious();
        } else {
          this.showNext();
        }
      }
    }, { passive: true });
  }

  openGallery(index = 0) {
    this.currentIndex = index;
    this.modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    this.showImage(index);
    this.updateNavigation();
    
    // Focus management for accessibility
    this.closeButton.focus();
  }

  closeGallery() {
    this.modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  showImage(index) {
    if (index < 0 || index >= this.images.length) return;
    
    this.currentIndex = index;
    const image = this.images[index];
    
    // Show loading state
    this.modal.classList.add('loading');
    
    // Create new image to preload
    const img = new Image();
    img.onload = () => {
      this.modalImage.src = img.src;
      this.modalImage.alt = image.alt;
      
      // Ensure the image scales to fit properly based on screen size
      this.applyResponsiveScaling();
      
      this.modal.classList.remove('loading');
    };
    img.onerror = () => {
      this.modal.classList.remove('loading');
      console.error('Failed to load image:', image.src);
    };
    img.src = image.src;
    
    // Update counter
    if (this.counter.current) {
      this.counter.current.textContent = index + 1;
    }
    
    this.updateNavigation();
  }

  showPrevious() {
    const newIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    this.showImage(newIndex);
  }

  showNext() {
    const newIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
    this.showImage(newIndex);
  }

  updateNavigation() {
    // Update navigation button states
    if (this.images.length <= 1) {
      this.prevButton.style.display = 'none';
      this.nextButton.style.display = 'none';
    } else {
      this.prevButton.style.display = 'flex';
      this.nextButton.style.display = 'flex';
    }
  }

  applyResponsiveScaling() {
    // Apply responsive scaling based on screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let maxWidth, maxHeight;
    
    if (screenWidth <= 480) {
      // Very small screens (mobile)
      maxWidth = '100vw';
      maxHeight = '90vh';
    } else if (screenWidth <= 768) {
      // Small screens (tablets)
      maxWidth = '95vw';
      maxHeight = '85vh';
    } else {
      // Large screens (desktop)
      maxWidth = '90vw';
      maxHeight = '80vh';
    }
    
    this.modalImage.style.maxWidth = maxWidth;
    this.modalImage.style.maxHeight = maxHeight;
    this.modalImage.style.width = 'auto';
    this.modalImage.style.height = 'auto';
    this.modalImage.style.objectFit = 'contain';
  }

  // Public method to refresh images (useful if images are dynamically added)
  refresh() {
    this.collectImages();
  }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.customerReviewGallery = new CustomerReviewGallery();
});
