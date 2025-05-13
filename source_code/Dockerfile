# ----------- Stage 1: Build -----------
    FROM node:18-alpine AS builder

    # Create app directory
    WORKDIR /app
    
    # Install dependencies (only production)
    COPY package*.json ./
    RUN npm install --production
    
    # Copy only necessary source files
    COPY app.js .
    COPY server.js .
    COPY public ./public

    
    # ----------- Stage 2: Run -----------
    FROM node:18-alpine3.18 AS runner
    
    WORKDIR /app
    
    # Copy from builder stage only the needed artifacts
    COPY --from=builder /app /app
    
    EXPOSE 3000
    
    CMD ["node", "server.js"]
    