/**
 * QR Code Modal Functionality
 * Handles opening and closing of QR code modals (WeChat, WhatsApp, etc.)
 */

document.addEventListener('DOMContentLoaded', function() {
  // Create modal HTML structure
  const modalHTML = `
    <div id="qr-modal" class="wechat-modal">
      <div class="wechat-modal-content">
        <button class="wechat-modal-close" aria-label="Close modal">&times;</button>
        <div class="text-center">
          <h3 id="qr-modal-title" class="text-xl font-semibold mb-4 text-gray-800"></h3>
          <div class="image-container">
            <img id="qr-modal-image" src="" alt="QR Code" />
          </div>
          <p id="qr-modal-description" class="text-sm text-gray-600 mt-4"></p>
        </div>
      </div>
    </div>
  `;
  
  // Add modal to the page
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  const modal = document.getElementById('qr-modal');
  const modalImage = document.getElementById('qr-modal-image');
  const modalTitle = document.getElementById('qr-modal-title');
  const modalDescription = document.getElementById('qr-modal-description');
  const closeButton = modal.querySelector('.wechat-modal-close');
  
  // Function to open modal
  function openModal(imageSrc, title, description) {
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus management for accessibility
    closeButton.focus();
  }
  
  // Function to close modal
  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  // Add click event listeners to all QR code triggers (WeChat, WhatsApp, etc.)
  document.addEventListener('click', function(e) {
    // Check for both wechat-qr-trigger and qr-trigger classes
    if (e.target.matches('.wechat-qr-trigger, .wechat-qr-trigger img, .wechat-qr-trigger *, .qr-trigger, .qr-trigger img, .qr-trigger *')) {
      e.preventDefault();
      
      // Get the image source and modal data from the trigger
      let imageSrc, title, description;
      const trigger = e.target.closest('.wechat-qr-trigger') || e.target.closest('.qr-trigger');
      
      if (trigger) {
        // Check for data attributes first
        if (trigger.dataset.qrImage) {
          imageSrc = trigger.dataset.qrImage;
          title = trigger.dataset.qrTitle || 'QR Code';
          description = trigger.dataset.qrDescription || 'Scan this QR code';
        }
        // Backward compatibility with wechatQr data attribute
        else if (trigger.dataset.wechatQr) {
          imageSrc = trigger.dataset.wechatQr;
          title = "Amy's WeChat QR Code";
          description = "Scan this QR code with WeChat to add Amy as a contact";
        }
        // Fallback to href for links
        else if (trigger.href) {
          imageSrc = trigger.href;
          title = trigger.title || "QR Code";
          description = "Scan this QR code";
        }
      }
      
      if (imageSrc) {
        openModal(imageSrc, title, description);
      }
    }
  });
  
  // Close modal when clicking the close button
  closeButton.addEventListener('click', closeModal);
  
  // Close modal when clicking the background
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
  
  // Prevent modal content clicks from closing the modal
  modal.querySelector('.wechat-modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
