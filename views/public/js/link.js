 // JavaScript for handling carousel items
 let items = document.querySelectorAll('.carousel .carousel-item');
 items.forEach((el) => {
     const minPerSlide = 4;
     let next = el.nextElementSibling;
     console.log('kufyujdujedueeuedueu')
     for (var i = 1; i < minPerSlide; i++) {
         if (!next) {
             // Wrap carousel by using first child
             next = items[0];
         }
         let cloneChild = next.cloneNode(true);
         el.appendChild(cloneChild.children[0]);
         next = next.nextElementSibling;
     }
 });

   // jQuery AJAX for adding product to cart

$(document).ready(function() {
 $('.addToCartBtn').on('click', function () {
     const productName = $(this).data('product-name');
     const price = $(this).data('price');
     const image = $(this).data('image');
     const quantity = $(this).data('quantity');

     $.ajax({
         url: '/cart',
         method: 'POST',
         data: {
             product_Name: productName,
             price: price,
             image: image,
             quantity: quantity
         },
         
         success: function (res) {
             Swal.fire({
                 icon: "success",
                     title: "Success",
                     text: "Product added to cart successfully"
             }).then(function(){
                     location.reload()
                 })
             // Optionally update UI or perform additional actions on success
         }
         ,
         error: function (error) {
             console.error('Error adding product to cart:', error);
             Swal.fire({
                 icon: "error",
                 title: "Error",
                 text: "Failed to add product to cart. Please try again later."
             });
             // Handle error, show error message, etc.
         }
     });
 });
});




// add to whislist


$(document).ready(function () {
 $('.whislistCartBtn').on('click', function () {
     const productName = $(this).data('product-name');
     const price = $(this).data('price');
     const image = $(this).data('image');

     $.ajax({
         url: '/whislist',
         method: 'POST',
         data: {
             product_Name: productName,
             price: price,
             image: image,
         },
         success: function (res) {
             Swal.fire({
                 icon: "success",
                 title: "Success",
                 text: "Product added to whislist successfully"
             }).then(function(){
                location.reload()
          })

             
             // Optionally update UI or perform additional actions on success
         },
         error: function (error) {
             console.error('Error adding product to cart:', error);
             Swal.fire({
                 icon: "error",
                 title: "Error",
                 text: "Failed to product to whislist. Please try again later."
             });
             // Handle error, show error message, etc.
         }
     });
 });
});




$(document).ready(function () {
		$(window).scroll(function () {
			var positionTop = $(document).scrollTop();
			console.log(positionTop);
			if ((positionTop > 1600) && (positionTop < 1750)) {
				$("#animate2").addClass("animate__animated animate__backInLeft");

			}

			if ((positionTop > 1600) && (positionTop < 1750)) {
				$("#animate1").addClass("animate__animated animate__backInDown");
			}

			if ((positionTop > 1600) && (positionTop < 1750)) {
				$("#animate3").addClass("animate__animated animate__backInRight");
			}

			if ((positionTop > 1600) && (positionTop < 1750)) {
				$("#animate4").addClass("animate__animated animate__backInLeft");
			}


			if ((positionTop > 1600) && (positionTop < 1750)) {
				$("#animate5").addClass("animate__animated animate__backInLeft");
			}


			if ((positionTop > 1600) && (positionTop < 1750)) {
				$("#animate6").addClass("animate__animated animate__backInLeft");
			}

			if ((positionTop > 1600) && (positionTop < 1750)) {
				$("#animate7").addClass("animate__animated animate__backInLeft");
			}

			if ((positionTop > 1600) && (positionTop < 1750)) {
				$("#animate8").addClass("animate__animated animate__backInLeft");
			}




		})


	})
