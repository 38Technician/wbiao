'use strict';

(function ($, window) {
	// el 	: { imgsContainer , prevBtn , nextBtn , indexContainer }
	// conf : { auto , needIndexNum , animateTiming , autoTiming , direction }
	$.fn.carousel = function (options) {
		//default param
		var $opt = {
			conf: {
				auto: true,
				needIndexNum: true,
				animateTiming: 1000,
				autoTiming: 3000,
				direction: 'right'
			}

			//init param
		};$.extend(true, $opt, options);
		var $this = $(this);
		var $el = new Object();
		var $conf = $opt.conf;

		$.each($opt.el, function (index, el) {
			$el[index] = $this.find(el);
		});

		//init dom
		var $imgsNum = $el.imgsContainer.find('li').length;
		for (var i = 1; i <= $imgsNum; i++) {
			$el.indexContainer.append($('<li></li>')); //${$conf.needIndexNum ? i : ''}<i class="iconfont .icon-point-10"></i>
		}

		//get dom
		var $index = $el.indexContainer.find('li');
		var $images = $el.imgsContainer.find('li');

		//init state
		$index.eq(0).addClass('current-index iconfont .icon-point-10');
		$images.eq(0).fadeIn($conf.animateTiming);

		//get current index
		var getCurrentIndex = function getCurrentIndex() {
			return $el.indexContainer.find('.current-index');
		};
		//get prev element
		var getPrevElement = function getPrevElement() {
			var currentIndex = getCurrentIndex();
			var prev_ = currentIndex.prev();
			return prev_.length ? prev_ : $index.eq($index.length - 1);
		};
		//get next element
		var getNextElement = function getNextElement() {
			var currentIndex = getCurrentIndex();
			var next_ = currentIndex.next();
			return next_.length ? next_ : $index.eq(0);
		};

		//change image
		var changeImage = function changeImage(next) {
			var currentIndex = getCurrentIndex();
			if (currentIndex.index() === next.index()) return;
			$images.stop().fadeOut($conf.animateTiming).eq(next.index()).stop().fadeIn($conf.animateTiming);
			currentIndex.removeClass('current-index');
			next.addClass('current-index');
		};

		//handle prevBtn click
		$el.prevBtn.on('click', function () {
			changeImage(getPrevElement());
		});

		//handle nextBtn click
		$el.nextBtn.on('click', function () {
			changeImage(getNextElement());
		});

		//handle index click
		$index.on('click', function () {
			changeImage($(this));
		});

		//if auto carousel
		if ($conf.auto) {
			var $timer = void 0;

			//auto carousel
			var autoCarousel = function autoCarousel() {
				$timer = window.setInterval(function () {
					if ($conf.direction === 'right') changeImage(getNextElement());
					if ($conf.direction === 'left') changeImage(getPrevElement());
				}, $conf.autoTiming);
			};
			autoCarousel();

			//handle carousel mouseenter
			$this.on('mouseenter', function (event) {
				if ($timer) window.clearInterval($timer);
			});

			//handle carousel mouseleave
			$this.on('mouseleave', function (event) {
				autoCarousel();
			});
		}
	};
})(jQuery, window);