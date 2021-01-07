import { handleResponsiveSwitch, withKeys } from '../helpers'

export const getWooVariablesFor = () => ({
	// Woocommerce archive
	shopCardsGap: {
		selector: '[data-products]',
		variable: 'cardsGap',
		responsive: true,
		unit: 'px'
	},

	...withKeys(['woocommerce_catalog_columns', 'blocksy_woo_columns'], {
		selector: '[data-products]',
		variable: 'shop-columns',
		responsive: true,
		unit: '',
		extractValue: () => {
			const value = wp.customize('blocksy_woo_columns')()

			return {
				desktop: `CT_CSS_SKIP_RULE`,
				tablet: `repeat(${value.tablet}, 1fr)`,
				mobile: `repeat(${value.mobile}, 1fr)`
			}
		}
	}),

	cardProductTitleColor: [
		{
			selector:
				'[data-products] .woocommerce-loop-product__title, [data-products] .woocommerce-loop-category__title',
			variable: 'color',
			type: 'color:default'
		},

		{
			selector:
				'[data-products] .woocommerce-loop-product__title, [data-products] .woocommerce-loop-category__title',
			variable: 'colorHover',
			type: 'color:hover'
		}
	],

	cardProductPriceColor: {
		selector: '[data-products] .price',
		variable: 'color',
		type: 'color'
	},

	starRatingColor: [
		{
			selector: ':root',
			variable: 'starRatingInitialColor',
			type: 'color:default'
		},

		{
			selector: ':root',
			variable: 'starRatingInactiveColor',
			type: 'color:inactive'
		}
	],

	saleBadgeColor: [
		{
			selector: ':root',
			variable: 'saleBadgeTextColor',
			type: 'color:text'
		},

		{
			selector: ':root',
			variable: 'saleBadgeBackgroundColor',
			type: 'color:background'
		}
	],

	cardProductCategoriesColor: [
		{
			selector: '[data-products] .entry-meta a',
			variable: 'linkInitialColor',
			type: 'color:default'
		},

		{
			selector: '[data-products] .entry-meta a',
			variable: 'linkHoverColor',
			type: 'color:hover'
		}
	],

	cardProductButton1Text: [
		{
			selector: '[data-products="type-1"]',
			variable: 'buttonTextInitialColor',
			type: 'color:default'
		},

		{
			selector: '[data-products="type-1"]',
			variable: 'buttonTextHoverColor',
			type: 'color:hover'
		}
	],

	cardProductButton2Text: [
		{
			selector: '[data-products="type-2"]',
			variable: 'buttonTextInitialColor',
			type: 'color:default'
		},

		{
			selector: '[data-products="type-2"]',
			variable: 'buttonTextHoverColor',
			type: 'color:hover'
		}
	],

	cardProductButtonBackground: [
		{
			selector: '[data-products]',
			variable: 'buttonInitialColor',
			type: 'color:default'
		},

		{
			selector: '[data-products]',
			variable: 'buttonHoverColor',
			type: 'color:hover'
		}
	],

	cardProductBackground: {
		selector: '[data-products="type-2"]',
		variable: 'backgroundColor',
		type: 'color'
	},

	cardProductRadius: {
		selector: '[data-products] .product',
		type: 'spacing',
		variable: 'borderRadius',
		responsive: true
	},

	cardProductShadow: {
		selector: '[data-products="type-2"]',
		type: 'box-shadow',
		variable: 'box-shadow',
		responsive: true
	},

	// Woocommerce single
	product_thumbs_spacing: {
		selector: '.ct-product-view',
		variable: 'thumbs-spacing',
		responsive: true,
		unit: '',
	},
	
	productGalleryWidth: {
		selector: '.product-entry-wrapper',
		variable: 'product-gallery-width',
		unit: '%'
	},

	singleProductTitleColor: {
		selector: '.entry-summary .product_title',
		variable: 'headingColor',
		type: 'color'
	},

	singleProductPriceColor: {
		selector: '.entry-summary .price',
		variable: 'color',
		type: 'color'
	},

	upsell_products_visibility: handleResponsiveSwitch({
		selector: '.single-product .up-sells'
	}),

	related_products_visibility: handleResponsiveSwitch({
		selector: '.single-product .related'
	}),

	// Store notice
	wooNoticeContent: {
		selector: '.demo_store',
		variable: 'color',
		type: 'color'
	},

	wooNoticeBackground: {
		selector: '.demo_store',
		variable: 'backgroundColor',
		type: 'color'
	},

	// messages
	infoMessageColor: [
		{
			selector: '.woocommerce-info, .woocommerce-message',
			variable: 'color',
			type: 'color:text'
		},

		{
			selector: '.woocommerce-info, .woocommerce-message',
			variable: 'backgroundColor',
			type: 'color:background'
		}
	],

	errorMessageColor: [
		{
			selector: '.woocommerce-error',
			variable: 'color',
			type: 'color:text'
		},

		{
			selector: '.woocommerce-error',
			variable: 'backgroundColor',
			type: 'color:background'
		}
	],

	// add to cart actions
	add_to_cart_button_width: {
		selector: '.entry-summary form.cart',
		variable: 'button-width',
		responsive: true,
		unit: '',
	},
	
	quantity_color: [
		{
			selector: '.entry-summary form.cart .quantity',
			variable: 'buttonInitialColor',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: '.entry-summary form.cart .quantity',
			variable: 'buttonHoverColor',
			type: 'color:hover',
			responsive: true,
		},
	],
	
	add_to_cart_text: [
		{
			selector: '.entry-summary .single_add_to_cart_button',
			variable: 'buttonTextInitialColor',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: '.entry-summary .single_add_to_cart_button',
			variable: 'buttonTextHoverColor',
			type: 'color:hover',
			responsive: true,
		},
	],

	add_to_cart_background: [
		{
			selector: '.entry-summary .single_add_to_cart_button',
			variable: 'buttonInitialColor',
			type: 'color:default',
			responsive: true,
		},

		{
			selector: '.entry-summary .single_add_to_cart_button',
			variable: 'buttonHoverColor',
			type: 'color:hover',
			responsive: true,
		},
	],
})