import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product: any;

  products = [
    {
      name: "iPhone 15 Pro Max",
      description: "The latest Apple smartphone with A17 chip.",
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000",
      category: "Smartphones",
      likes: 0
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      description: "Powerful Android phone with S-Pen and AI features.",
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=preview-large",
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/?c=750000000",
      category: "Smartphones",
      likes: 0
    },
    {
      name: "Google Pixel 8 Pro",
      description: "Google's flagship phone with AI-powered features.",
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hd1/hc9/84326216630302.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-114017043/?c=750000000",
      category: "Smartphones",
      likes: 0
    },
    {
      name: "OnePlus 12",
      description: "Flagship Android phone with Hasselblad camera.",
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h59/h39/85092022976542.png?format=preview-large",
      link: "https://kaspi.kz/shop/p/oneplus-12-16-gb-512-gb-zelenyi-116425234/?c=750000000",
      category: "Smartphones",
      likes: 0
    },
    {
      name: "Xiaomi 14 Ultra",
      description: "Premium camera-focused smartphone with Snapdragon 8 Gen 3.",
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h73/hd9/85504363560990.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-belyi-117684822/?c=750000000",
      category: "Smartphones",
      likes: 0
    },
    {
      name: "MacBook Air M2",
      description: "Apple's lightweight laptop with M2 chip.",
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-106110064/?c=750000000",
      category: "Laptop",
      likes: 0
    },
    {
      name: "Asus ROG Strix G16",
      description: "High-performance gaming laptop with RTX 3080.",
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfe/h28/85628076032030.png?format=preview-large",
      link: "https://kaspi.kz/shop/p/asus-rog-strix-g16-16-32-gb-ssd-1000-gb-dos-g614ji-n4181-90nr0d41-m00v20-118060952/?c=750000000",
      category: "Laptops and Tablets",
      likes: 0
    },
    {
      name: "Apple iPad Pro M2",
      description: "Advanced tablet with M2 chip and Liquid Retina display.",
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h3c/h53/64896210403358.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-wi-fi-11-djuim-8-gb-256-gb-seryi-107276752/?c=750000000",
      category: "Laptops and Tablets",
      likes: 0
    },
    {
      name: "Lenovo Legion 5 Pro",
      description: "Gaming laptop with AMD Ryzen 7 and RTX 3070.",
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h69/hb0/85987722395678.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/lenovo-legion-5-16-32-gb-ssd-1000-gb-win-11-pro-16irx9-83dg006wrk-119270896/?c=750000000",
      category: "Laptops and Tablets",
      likes: 0
    },
    {
      name: "HP Spectre x360",
      description: "2-in-1 convertible laptop with a sleek design.",
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h82/hbb/85832389918750.png?format=preview-large",
      link: "https://kaspi.kz/shop/p/hp-spectre-x360-14-16-gb-ssd-1000-gb-win-11-14-eu0003ci-a19gjea-118723256/?c=750000000",
      category: "Laptops and Tablets",
      likes: 0
    },
    {
      name: "Samsung 55” 4K Smart TV",
      description: "Ultra HD Smart TV with vibrant colors and deep contrasts.",
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000",
      category: "TVs and Consoles",
      likes: 0
    },
    {
      name: "PlayStation 5",
      description: "Next-generation gaming console with immersive gameplay.",
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000",
      category: "TVs and Consoles",
      likes: 0
    },
    {
      name: "Xbox Series X",
      description: "Microsoft's most powerful gaming console.",
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p30/pe1/12631853.png?format=preview-large",
      link: "https://kaspi.kz/shop/p/xbox-series-x-1tb-belyi-131268902/?c=750000000",
      category: "TVs and Consoles",
      likes: 0
    },
    {
      name: "LG OLED C2 65”",
      description: "Top-tier OLED TV for a cinematic experience.",
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hc0/h4b/86202449985566.png?format=preview-large",
      link: "https://kaspi.kz/shop/p/lg-oled65g4rla-165-sm-chernyi-120091680/?c=750000000",
      category: "TVs and Consoles",
      likes: 0
    },
    {
      name: "Nintendo Switch OLED",
      description: "Portable gaming console with an OLED screen.",
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h09/h4c/64191552651294.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000",
      category: "TVs and Consoles",
      likes: 0
    },
    {
      name: "Sony WH-1000XM5",
      description: "Industry-leading noise-canceling wireless headphones.",
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/sony-wf-1000xm5-chernyi-112854077/?c=750000000",
      category: "Accessories",
      likes: 0
    },
    {
      name: "Xiaomi Mi Band 8",
      description: "Affordable fitness tracker with multiple health features.",
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000",
      category: "Accessories",
      likes: 0
    },
    {
      name: "Meta Quest 3",
      description: "Wireless VR headset for an immersive experience.",
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h00/h89/84023738925086.png?format=preview-large",
      link: "https://kaspi.kz/shop/p/meta-quest-3-512-gb-113525753/?c=750000000",
      category: "Accessories",
      likes: 0
    },
    {
      name: "Apple AirPods Pro (2nd Gen)",
      description: "High-quality wireless earbuds with noise cancellation.",
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000",
      category: "Accessories",
      likes: 0
    },
    {
      name: "Samsung Galaxy Watch 6",
      description: "Smartwatch with advanced health tracking and AMOLED display.",
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h76/h31/82569351266334.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/samsung-galaxy-watch6-44-mm-grafitovyi-chernyi-112368202/?c=750000000",
      category: "Accessories",
      likes: 0
    }
]

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productName = params.get('name');
      this.product = this.products.find(p => p.name === productName);
    });
  }
}