import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: "iPhone 15 Pro Max",
      description: "The latest Apple smartphone with A17 chip.",
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000"
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      description: "Powerful Android phone with S-Pen and AI features.",
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=preview-large",
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/?c=750000000"
    },
    {
      name: "MacBook Air M2",
      description: "Apple's lightweight laptop with M2 chip.",
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-106110064/?c=750000000"
    },
    {
      name: "Asus ROG Strix G16",
      description: "High-performance gaming laptop with RTX 3080.",
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfe/h28/85628076032030.png?format=preview-large",
      link: "https://kaspi.kz/shop/p/asus-rog-strix-g16-16-32-gb-ssd-1000-gb-dos-g614ji-n4181-90nr0d41-m00v20-118060952/?c=750000000"
    },
    {
      name: "Sony WH-1000XM5",
      description: "Industry-leading noise-canceling wireless headphones.",
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/sony-wf-1000xm5-chernyi-112854077/?c=750000000"
    },
    {
      name: "Samsung 55” 4K Smart TV",
      description: "Ultra HD Smart TV with vibrant colors and deep contrasts.",
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000"
    },
    {
      name: "Apple iPad Pro M2",
      description: "Advanced tablet with M2 chip and Liquid Retina display.",
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h3c/h53/64896210403358.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-wi-fi-11-djuim-8-gb-256-gb-seryi-107276752/?c=750000000"
    },
    {
      name: "Dyson V15 Detect",
      description: "Powerful cordless vacuum cleaner with laser detection.",
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfb/h11/81397947301918.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-110975356/?c=750000000"
    },
    {
      name: "PlayStation 5",
      description: "Next-generation gaming console with immersive gameplay.",
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000"
    },
    {
      name: "Xiaomi Mi Band 8",
      description: "Affordable fitness tracker with multiple health features.",
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000"
    }
  ];

  share(productLink: string) {
    const message = encodeURIComponent(`Check out this product: ${productLink}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }
}