<script setup>
	import navtest from './navber.vue'
</script>

<template>
	<div class="bigbox">


		<div class="hero_area">
			<!-- header section strats -->
			<!-- <header class="header_section">
				<div class="container-fluid">
					<nav class="navbar navbar-expand-lg custom_nav-container ">
						<a class="navbar-brand" href="index.html">
							<span>
								Odora
							</span>
						</a>
						<button class="navbar-toggler" type="button" data-toggle="collapse"
							data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
							<span class=""> </span>
						</button>

						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
								<ul class="navbar-nav  pl-lg-5">
									<li class="nav-item active">
										<a class="nav-link" href="index.html">Home <span
												class="sr-only">(current)</span></a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="about.html"> About</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="products.html">Products</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="contact.html">Contact Us</a>
									</li>
								</ul>
							</div>
							<div class="quote_btn-container">
								<router-link to="/login">
									<span>
										Login
									</span>
								</router-link>
								<router-link to="/shop">
									<span>
										shop
									</span>
								</router-link>
							</div>
						</div>
					</nav>
				</div>
			</header> -->
			<!-- end header section -->
			<!-- slider section -->
			<navtest></navtest>
			<section class="slider_section ">
				<div class="slider_bg_box">
					<img src="../assets/images/slider-bg.jpg" alt="">
				</div>
				<div id="customCarousel" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<div class="container ">
								<div class="row">
									<div class="col-md-7 col-lg-6">
										<div class="detail-box">
											<h1>
												We Bring To You <br>
												Tea Products
											</h1>
											<p>
												Dolorem vitae a sit iusto cum quos rerum, incidunt vero pariatur
												adipisci molestiae temporibus animi cumque!
											</p>
											<a href="">
												Contact Us
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="container ">
								<div class="row">
									<div class="col-md-7 col-lg-6">
										<div class="detail-box">
											<h1>
												We Bring To You <br>
												Tea Products
											</h1>
											<p>
												Dolorem vitae a sit iusto cum quos rerum, incidunt vero pariatur
												adipisci molestiae temporibus animi cumque!
											</p>
											<a href="">
												Contact Us
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="container ">
								<div class="row">
									<div class="col-md-7 col-lg-6">
										<div class="detail-box">
											<h1>
												We Bring To You <br>
												Tea Products
											</h1>
											<p>
												Dolorem vitae a sit iusto cum quos rerum, incidunt vero pariatur
												adipisci molestiae temporibus animi cumque!
											</p>
											<a href="">
												Contact Us
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<ol class="carousel-indicators">
							<li data-target="#customCarousel" data-slide-to="0" class="active"></li>
							<li data-target="#customCarousel" data-slide-to="1"></li>
							<li data-target="#customCarousel" data-slide-to="2"></li>
						</ol>
					</div>
				</div>
			</section>
			<!-- end slider section -->
		</div>


		<!-- about section -->

		<section class="about_section about_section1 layout_padding ">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="img-box">
							<img src="../assets/images/about-img.jpg" alt="">
						</div>
					</div>
					<div class="col-md-6">
						<div class="detail-box">
							<div class="heading_container">
								<h2>
									About Us
								</h2>
							</div>
							<p>
								Eveniet, laboriosam omnis. Nemo itaque ullam perferendis corporis eius cupiditate fugiat
								quisquam, veritatis ratione quasi vel in modi at ipsa placeat, similique dignissimos
								consequuntur ipsum, molestias tempore. Voluptatem, fugiat itaque?
							</p>
							<p>
								Necessitatibus ut doloremque facere a unde cupiditate consequuntur eos et voluptatibus
								optio aut, expedita reiciendis libero impedit quo cum ipsa cumque aliquam officia quos,
								voluptate sint quae consectetur. Necessitatibus, animi?

							</p>
							<a href="">
								Read More
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- end about section -->

		<!-- product section -->

		<section class="product_section layout_padding">
			<div class="container">
				<div class="heading_container">
					<h2>
						Our Poducts
					</h2>
				</div>
				<div class="row">
					<div class="col-md-6 col-lg-4 mx-auto">
						<div class="box">
							<div class="img-box">
								<img src="../assets/images/p1.png" alt="">
							</div>
							<div class="detail-box">
								<h5>
									Chamomile Tea
								</h5>
								<div class="price_box">
									<h6 class="price_heading">
										<span>$</span> 100.00
									</h6>
									<a href="">
										<i class="fa fa-shopping-cart" aria-hidden="true"></i>
										Add To Cart
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-4 mx-auto">
						<div class="box">
							<div class="img-box">
								<img src="../assets/images/p2.png" alt="">
							</div>
							<div class="detail-box">
								<h5>
									Herbal Tea
								</h5>
								<div class="price_box">
									<h6 class="price_heading">
										<span>$</span> 200.00
									</h6>
									<a href="">
										<i class="fa fa-shopping-cart" aria-hidden="true"></i>
										Add To Cart
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-4 mx-auto">
						<div class="box">
							<div class="img-box">
								<img src="../assets/images/p3.png" alt="">
							</div>
							<div class="detail-box">
								<h5>
									Linden Tea
								</h5>
								<div class="price_box">
									<h6 class="price_heading">
										<span>$</span> 200.00
									</h6>
									<a href="">
										<i class="fa fa-shopping-cart" aria-hidden="true"></i>
										Add To Cart
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer class="footer_section">
			<div class="container">
				<p>
					&copy; <span id="displayYear"></span> All Rights Reserved By
					<a href="https://html.design/">Free Html Templates</a>
				</p>
			</div>
		</footer>
	</div>
</template>
<style scoped>
	.bigbox {
		width: 99vw;
	}

	.mainnav {
		width: 68vw;
		color: black;
	}
</style>
<style scoped src="../assets/css/font-awesome.min.css"></style>
<style scoped src="../assets/css/style.css"></style>
<style scoped src="../assets/css/responsive.css"></style>
<style scoped src="../assets/css/bootstrap.css"></style>