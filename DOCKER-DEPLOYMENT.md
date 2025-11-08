# Docker Deployment Guide

## 📦 Docker Setup Complete

Your portfolio is now configured for Docker deployment with optimized multi-stage builds.

---

## 🐳 Files Created

1. **Dockerfile** - Multi-stage build configuration
2. **docker-compose.yml** - Container orchestration
3. **.dockerignore** - Excludes unnecessary files from Docker build
4. **next.config.ts** - Updated with standalone output

---

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Option 2: Using Docker CLI

```bash
# Build the image
docker build -t portfolio-nuranggi .

# Run the container
docker run -p 3000:3000 --name portfolio portfolio-nuranggi

# Run in background
docker run -d -p 3000:3000 --name portfolio portfolio-nuranggi

# Stop the container
docker stop portfolio

# Remove the container
docker rm portfolio
```

---

## 🌐 Access Your Portfolio

Once the container is running, access your portfolio at:
- **Local:** http://localhost:3000
- **Network:** http://YOUR_SERVER_IP:3000

---

## 📋 Docker Commands Cheat Sheet

### Build & Run
```bash
# Build the image
docker build -t portfolio-nuranggi .

# Run container
docker run -d -p 3000:3000 --name portfolio portfolio-nuranggi

# Run with environment variables
docker run -d -p 3000:3000 \
  -e NODE_ENV=production \
  --name portfolio \
  portfolio-nuranggi
```

### Management
```bash
# View running containers
docker ps

# View all containers
docker ps -a

# View logs
docker logs portfolio

# Follow logs
docker logs -f portfolio

# Stop container
docker stop portfolio

# Start container
docker start portfolio

# Restart container
docker restart portfolio

# Remove container
docker rm portfolio

# Remove image
docker rmi portfolio-nuranggi
```

### Docker Compose Commands
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and start
docker-compose up -d --build

# Stop and remove volumes
docker-compose down -v
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment variables:

```env
NODE_ENV=production
PORT=3000
# Add other environment variables here
```

Then update `docker-compose.yml`:

```yaml
services:
  portfolio:
    env_file:
      - .env.local
```

### Custom Port

To use a different port, modify `docker-compose.yml`:

```yaml
ports:
  - "8080:3000"  # Maps host port 8080 to container port 3000
```

---

## 📊 Docker Image Details

### Multi-Stage Build

The Dockerfile uses a multi-stage build process:

1. **base** - Base Node.js Alpine image
2. **deps** - Installs dependencies
3. **builder** - Builds the Next.js application
4. **runner** - Production runtime (smallest image)

### Image Size Optimization

- Uses Alpine Linux (minimal footprint)
- Multi-stage build (only production files)
- Standalone output (minimal dependencies)
- Non-root user for security

### Expected Image Size

- **Unoptimized:** ~500MB
- **Optimized (standalone):** ~150-200MB

---

## 🚢 Production Deployment

### Deploy to VPS/Cloud Server

1. **Upload files to server:**
```bash
scp -r . user@your-server:/path/to/portfolio
```

2. **SSH into server:**
```bash
ssh user@your-server
cd /path/to/portfolio
```

3. **Build and run:**
```bash
docker-compose up -d
```

### Deploy with Nginx Reverse Proxy

Create nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Deploy to Docker Hub

```bash
# Tag the image
docker tag portfolio-nuranggi username/portfolio-nuranggi:latest

# Login to Docker Hub
docker login

# Push to Docker Hub
docker push username/portfolio-nuranggi:latest

# Pull and run on any server
docker pull username/portfolio-nuranggi:latest
docker run -d -p 3000:3000 username/portfolio-nuranggi:latest
```

---

## 🔒 Security Best Practices

1. **Non-root user** - Container runs as `nextjs` user
2. **Minimal base image** - Alpine Linux reduces attack surface
3. **No unnecessary files** - `.dockerignore` excludes sensitive files
4. **Environment variables** - Use for sensitive data
5. **Regular updates** - Keep base image and dependencies updated

---

## 🐛 Troubleshooting

### Container won't start

```bash
# Check logs
docker logs portfolio

# Check if port is already in use
netstat -ano | findstr :3000  # Windows
lsof -i :3000                  # Linux/Mac
```

### Build fails

```bash
# Clean build cache
docker builder prune

# Rebuild without cache
docker build --no-cache -t portfolio-nuranggi .
```

### Can't access from network

```bash
# Check if container is running
docker ps

# Check firewall settings
# Windows: Allow port 3000 in Windows Firewall
# Linux: sudo ufw allow 3000
```

### Out of disk space

```bash
# Clean up unused images
docker image prune -a

# Clean up everything
docker system prune -a
```

---

## 📈 Performance Optimization

### Enable Caching

Update Dockerfile for better caching:

```dockerfile
# Copy package files first (cached if unchanged)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files last
COPY . .
```

### Health Checks

Add health check to `docker-compose.yml`:

```yaml
services:
  portfolio:
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

---

## 🔄 CI/CD Integration

### GitHub Actions Example

Create `.github/workflows/docker.yml`:

```yaml
name: Docker Build and Push

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t portfolio-nuranggi .
      
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      
      - name: Push to Docker Hub
        run: |
          docker tag portfolio-nuranggi username/portfolio-nuranggi:latest
          docker push username/portfolio-nuranggi:latest
```

---

## ✅ Verification Checklist

- [ ] Docker installed and running
- [ ] `docker-compose.yml` configured
- [ ] `.dockerignore` in place
- [ ] `next.config.ts` has standalone output
- [ ] Build completes successfully
- [ ] Container starts without errors
- [ ] Portfolio accessible at localhost:3000
- [ ] Environment variables configured (if needed)
- [ ] Logs show no errors

---

## 📚 Next Steps

1. **Test locally:** `docker-compose up`
2. **Deploy to server:** Transfer files and run docker-compose
3. **Set up domain:** Configure DNS and reverse proxy
4. **Enable HTTPS:** Use Let's Encrypt with Nginx
5. **Monitor:** Set up logging and monitoring tools

---

## 🆘 Support

For Docker-specific issues:
- [Docker Documentation](https://docs.docker.com/)
- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Docker Hub](https://hub.docker.com/)

---

**Your portfolio is now Docker-ready! 🎉**

Build and deploy with:
```bash
docker-compose up -d
```
