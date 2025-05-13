document.addEventListener("DOMContentLoaded", () => {
  // Filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn")
  const galleryItems = document.querySelectorAll(".gallery-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const filterValue = this.getAttribute("data-filter")

      galleryItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })
    })
  })

  // Lightbox functionality
  const lightbox = document.querySelector(".lightbox")
  const lightboxImg = document.getElementById("lightbox-img")
  const caption = document.querySelector(".caption")
  const closeBtn = document.querySelector(".close-btn")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")

  let currentIndex = 0
  let visibleItems = []

  function updateVisibleItems() {
    visibleItems = Array.from(galleryItems).filter((item) => item.style.display !== "none")
  }

  function openLightbox(index) {
    updateVisibleItems()
    currentIndex = index

    const item = visibleItems[currentIndex]
    const img = item.querySelector("img")
    const text = item.querySelector(".overlay span").textContent

    lightboxImg.src = img.src
    caption.textContent = text
    lightbox.style.display = "flex"

    // Disable scrolling on body
    document.body.style.overflow = "hidden"
  }

  function closeLightbox() {
    lightbox.style.display = "none"
    // Enable scrolling on body
    document.body.style.overflow = "auto"
  }

  function navigateGallery(direction) {
    currentIndex = (currentIndex + direction + visibleItems.length) % visibleItems.length

    const item = visibleItems[currentIndex]
    const img = item.querySelector("img")
    const text = item.querySelector(".overlay span").textContent

    lightboxImg.src = img.src
    caption.textContent = text
  }

  // Open lightbox when clicking on gallery item
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      openLightbox(index)
    })
  })

  // Close lightbox
  closeBtn.addEventListener("click", closeLightbox)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox()
    }
  })

  // Navigate through gallery
  prevBtn.addEventListener("click", () => navigateGallery(-1))
  nextBtn.addEventListener("click", () => navigateGallery(1))

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowLeft") {
        navigateGallery(-1)
      } else if (e.key === "ArrowRight") {
        navigateGallery(1)
      }
    }
  })
})
