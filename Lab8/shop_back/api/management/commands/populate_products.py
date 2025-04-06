import os
import json
from django.core.management.base import BaseCommand
from api.models import Product, Category

class Command(BaseCommand):
    help = "Populate database with products from JSON file"

    def handle(self, *args, **kwargs):
        json_path = os.path.join(os.path.dirname(__file__), "data\\products.json")

        try:
            with open(json_path, "r", encoding="utf-8") as file:
                products = json.load(file)
                
                for prod in products:
                    category, _ = Category.objects.get_or_create(name=prod["category"])
                    Product.objects.create(
                        name=prod["name"],
                        description=prod["description"],
                        rating=prod["rating"],
                        image=prod["image"],
                        link=prod["link"],
                        category=category,
                        likes=prod["likes"]
                    )

                self.stdout.write(self.style.SUCCESS("Products imported successfully."))

        except FileNotFoundError:
            self.stderr.write(self.style.ERROR(f"File not found: {json_path}"))
        except Exception as e:
            self.stderr.write(self.style.ERROR(f"Error: {str(e)}"))
