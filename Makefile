.PHONY: help build up down logs restart clean rebuild

# Variables
IMAGE_NAME=portfolio-nuranggi
CONTAINER_NAME=portfolio

help: ## Show this help message
	@echo "Available commands:"
	@echo "  make build     - Build the Docker image"
	@echo "  make up        - Start the container"
	@echo "  make down      - Stop the container"
	@echo "  make logs      - View container logs"
	@echo "  make restart   - Restart the container"
	@echo "  make clean     - Remove container and image"
	@echo "  make rebuild   - Rebuild and restart"

build: ## Build the Docker image
	docker-compose build

up: ## Start the container
	docker-compose up -d
	@echo "Portfolio is running at http://localhost:3000"

down: ## Stop the container
	docker-compose down

logs: ## View container logs
	docker-compose logs -f

restart: ## Restart the container
	docker-compose restart

clean: ## Remove container and image
	docker-compose down
	docker rmi $(IMAGE_NAME) || true

rebuild: ## Rebuild and restart
	docker-compose down
	docker-compose build --no-cache
	docker-compose up -d
	@echo "Portfolio rebuilt and running at http://localhost:3000"

dev: ## Run in development mode (without Docker)
	npm run dev

prod-build: ## Build for production
	npm run build

prod-start: ## Start production server
	npm start
