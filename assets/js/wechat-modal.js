/**
 * WeChat QR Code Modal Functionality
 * Handles opening and closing of WeChat QR code modals
 */

document.addEventListener('DOMContentLoaded', function() {
  // Create modal HTML structure
  const modalHTML = `
    <div id="wechat-modal" class="wechat-modal">
      <div class="wechat-modal-content">
        <button class="wechat-modal-close" aria-label="Close modal">&times;</button>
        <div class="text-center">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Amy's WeChat QR Code</h3>
          <div class="image-container">
            <img id="wechat-modal-image" src="" alt="Amy's WeChat QR Code" />
          </div>
          <p class="text-sm text-gray-600 mt-4">Scan this QR code with WeChat to add Amy as a contact</p>
        </div>
      </div>
    </div>
  `;
  
  // Add modal to the page
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  const modal = document.getElementById('wechat-modal');
  const modalImage = document.getElementById('wechat-modal-image');
  const closeButton = modal.querySelector('.wechat-modal-close');
  
  // Function to open modal
  function openModal(imageSrc) {
    modalImage.src = imageSrc;
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
  
  // Add click event listeners to all WeChat QR icons
  document.addEventListener('click', function(e) {
    if (e.target.matches('.wechat-qr-trigger, .wechat-qr-trigger img')) {
      e.preventDefault();
      
      // Get the image source from the link href or data attribute
      let imageSrc;
      const link = e.target.closest('a');
      if (link) {
        imageSrc = link.href;
      }
      
      if (imageSrc) {
        openModal(imageSrc);
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
