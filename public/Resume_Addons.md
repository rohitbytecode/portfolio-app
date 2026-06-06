# Malavia-Claim: Production-Grade Project Analysis

> **Hospital Insurance Claims Management System (HICMS)** — A full-stack, multi-platform claims lifecycle management system built with TypeScript, deployed as Web + Desktop (Electron) with LAN networking support.

---

## 1. User-Facing Features

| # | Feature | Description | Resume Bullet |
|---|---------|-------------|---------------|
| 1 | **End-to-End Claim Lifecycle** | Full cashless & reimbursement claim workflows with 15+ statuses (Draft → Pre-Auth → Approval → Settlement → Deposit → Closed) | Engineered a finite state machine governing 15+ claim statuses across cashless and reimbursement workflows with business-rule validation at each transition |
| 2 | **Role-Based Access Control (6 Roles)** | SUPER_ADMIN, ADMIN, CLAIM_MANAGER, CLAIM_EXECUTIVE, ACCOUNTANT, PHARMACIST — each with granular route and API-level permissions | Implemented hierarchical RBAC with 6 distinct roles, enforcing both API-level middleware guards and frontend route protection |
| 3 | **Real-Time Notifications** | Socket.io-powered live notifications on claim status changes, with toast popups, badge counts, and mark-read functionality | Built real-time notification system using Socket.io with JWT-authenticated WebSocket connections and Zustand-based state management |
| 4 | **Advanced Email Notifications** | SMTP-based email alerts on claim transitions with configurable recipients and templates | Integrated SMTP email notification pipeline triggered on claim state transitions with per-event recipient configuration |
| 5 | **Concurrency Locking** | WebSocket-based pessimistic locking prevents two users from editing the same claim simultaneously, with device name tracking | Designed WebSocket-based pessimistic concurrency control with automatic lock release on disconnect, preventing data conflicts across LAN clients |
| 6 | **Settlement Engine** | Hybrid discount calculations with department-level breakdowns, vendor payout splits, hospital share, TDS, and payer contract policies | Built financial settlement engine computing hybrid discounts, vendor payouts, hospital shares, and TDS across department-level breakdowns |
| 7 | **Ageing Intelligence & Alerts** | Automated cron-based alert system detecting courier delays (30/60/90-day thresholds), pending settlements, and deposit mismatches | Implemented scheduled ageing intelligence jobs with tiered severity alerts (LOW/MEDIUM/CRITICAL) and automatic resolution lifecycle |
| 8 | **Dashboard & Reports** | Analytics dashboard with filterable reports and data export capabilities | Developed analytics dashboard with role-specific report generation and data aggregation pipelines |
| 9 | **Audit Trail System** | Complete audit logging of all entity changes with previous/new data snapshots, user attribution, and visual diff viewer | Built comprehensive audit logging system capturing field-level change diffs with user attribution and interactive diff viewer for admins |
| 10 | **Document Management** | File upload/download with in-app preview, zoom, and rotation for images and PDFs | Implemented document management system with in-app viewer supporting zoom/rotate for images and PDFs |
| 11 | **Payer Contract Management** | Insurance company contract configuration with department-specific discount policies | Designed payer contract system with department-level discount policies driving automated settlement calculations |
| 12 | **Patient & Doctor Registry** | Master data management for patients and doctors linked to claims | Built patient and doctor registry modules with relational claim associations |
| 13 | **Desktop Application** | Electron-based desktop app with LAN server/client architecture, auto-start, and network share support | Packaged as Electron desktop application with embedded backend server, LAN client discovery, and Windows auto-start registration |
| 14 | **Claim Status Timeline** | Visual timeline of all status transitions with timestamps, remarks, and actor information | Implemented visual claim status timeline tracking all transitions with actor attribution and timestamped remarks |
| 15 | **Department Allocations** | Department-wise claim amount allocation and tracking | Built department allocation module for distributing claim amounts across hospital departments |
| 16 | **Past Records Import** | Bulk import of historical claim data for migration purposes | Developed historical data migration pipeline with seed scripts for bulk past-record insertion |

---

## 2. What Distinguishes This From a College Project

| Aspect | College Project | This Project |
|--------|----------------|--------------|
| **Architecture** | Single file / MVC monolith | Turborepo monorepo with 3 apps + 4 shared packages |
| **State Machine** | Simple if/else status changes | Formal finite state machine with type-safe transition maps, business rule guards, and reconsideration windows |
| **Auth** | Basic JWT or session | Dual-token rotation (access + refresh) with bcrypt-hashed refresh token storage, automatic silent refresh via Axios interceptors |
| **Concurrency** | None | WebSocket pessimistic locking with device tracking and auto-release on disconnect |
| **Monitoring** | console.log | Prometheus metrics (5 custom instruments) + Jaeger distributed tracing + Pino structured logging |
| **Security** | None or minimal | Helmet, NoSQL injection sanitization, rate limiting, CORS whitelist, HTTPS/TLS, request size limits |
| **Testing** | Manual | Vitest + Supertest integration tests with MongoDB Memory Server for isolated DB testing |
| **Deployment** | localhost | Docker Compose, multi-stage Dockerfile, PM2 cluster mode, Nginx reverse proxy, Electron packaging with NSIS installer |
| **Error Handling** | try/catch with generic messages | Custom AppError hierarchy, centralized error middleware, environment-aware error responses (dev vs prod) |
| **Notifications** | None | Multi-channel: WebSocket real-time + SMTP email + browser notifications + in-app toast queue |
| **Financial Logic** | Basic CRUD | Hybrid discount engine with department-level breakdowns, vendor/hospital splits, TDS, and payer contract integration |

---

## 3. Production Engineering Practices

### Architecture & Design Decisions

| Practice | Implementation | Resume Bullet |
|----------|---------------|---------------|
| **Turborepo Monorepo** | 3 apps (backend, frontend, desktop) + 4 shared packages (types, shared, eslint-config, ts-config) orchestrated by Turborepo with pnpm workspaces | Architected Turborepo monorepo with pnpm workspaces managing 3 applications and 4 shared packages with parallelized builds |
| **Modular Backend (25 Modules)** | Each module follows Controller → Service → Repository → Schema → Validation → Routes pattern | Designed modular backend with 25 domain modules following layered architecture (Controller/Service/Repository) for maintainability |
| **Finite State Machine** | Type-safe `ClaimWorkflowMap` with separate cashless and reimbursement transition graphs, enforced at the service layer | Implemented type-safe finite state machine with declarative transition maps, business-rule guards, and 7-day reconsideration windows |
| **Mapper Pattern** | Dedicated mapper functions (`toClaimResponse`, `toUserResponse`) decouple DB schemas from API responses | Applied DTO/Mapper pattern to decouple database schemas from API response contracts |
| **API Versioning** | All routes prefixed with `/api/v1/` for forward compatibility | Implemented API versioning (`/api/v1/`) enabling non-breaking API evolution |
| **Multi-Platform Delivery** | Same codebase serves Web (Vite), Desktop (Electron), and LAN clients via runtime config injection | Delivered multi-platform application from a single codebase: Web (Vite/React), Desktop (Electron), and LAN network clients |
| **Runtime Configuration** | `config.json` injected at startup for Electron/LAN to dynamically resolve API and Socket URLs | Implemented runtime configuration injection for dynamic API/Socket URL resolution across deployment targets |

### Security & Reliability

| Practice | Implementation | Resume Bullet |
|----------|---------------|---------------|
| **Dual JWT Token Rotation** | Short-lived access tokens + long-lived refresh tokens; refresh tokens stored as bcrypt hashes; automatic rotation on refresh | Implemented secure dual JWT token rotation with bcrypt-hashed refresh token storage and automatic silent token refresh |
| **Helmet Security Headers** | HTTP security headers (CSP, HSTS, X-Frame-Options, etc.) via Helmet middleware | Hardened HTTP security headers using Helmet middleware (CSP, HSTS, X-Frame-Options) |
| **NoSQL Injection Prevention** | `express-mongo-sanitize` sanitizes req.body, params, query, and headers against `$` and `.` operators | Protected against NoSQL injection attacks by sanitizing all request vectors (body, params, query, headers) |
| **Rate Limiting** | Configurable per-IP rate limiting (default 100 req/15min) with environment-based bypass for development | Configured per-IP API rate limiting with environment-aware bypass and configurable thresholds |
| **HTTPS/TLS** | Self-signed SSL certificates for backend HTTPS server; Vite dev server also runs over HTTPS | Enforced end-to-end TLS encryption with HTTPS backend server and secure WebSocket transport |
| **CORS Whitelist** | Dynamic CORS origin resolution with comma-separated whitelist from env vars | Implemented dynamic CORS whitelist with environment-based origin validation |
| **Request Size Limits** | JSON body limited to 10KB to prevent payload-based DoS | Applied request payload size limits (10KB) to mitigate payload-based denial-of-service |
| **Zod Schema Validation** | Request validation middleware using Zod schemas for body, query, and params | Implemented schema-based request validation using Zod with structured error responses |
| **Environment Validation** | All env vars validated at startup via Zod schema; server exits on invalid config | Enforced compile-time environment validation using Zod schema — fails fast on misconfiguration |
| **Graceful Shutdown** | SIGINT/SIGTERM handlers close HTTP server and MongoDB connection with 10s force-kill timeout | Implemented graceful shutdown with signal handlers, connection draining, and 10-second force-kill timeout |
| **Global Exception Handlers** | `uncaughtException` and `unhandledRejection` handlers prevent silent crashes | Registered global exception handlers for uncaught exceptions and unhandled promise rejections |
| **Custom AppError Hierarchy** | `AppError` class with HTTP status codes; centralized error middleware; dev vs prod error responses | Built custom error hierarchy with HTTP status codes and environment-aware error serialization (stack traces in dev only) |

### Scalability & Performance

| Practice | Implementation | Resume Bullet |
|----------|---------------|---------------|
| **PM2 Cluster Mode** | `ecosystem.config.cjs` runs `instances: "max"` using all CPU cores with 1GB memory restart threshold | Configured PM2 cluster mode utilizing all CPU cores with automatic restart on 1GB memory threshold |
| **Prometheus Metrics** | 5 custom instruments: request duration histogram, request counter, active requests gauge, request/response size histograms with route-level granularity | Instrumented 5 custom Prometheus metrics (latency histograms, request counters, active gauges, payload sizes) with per-route cardinality control |
| **Jaeger Distributed Tracing** | OpenTelemetry SDK with auto-instrumentation exporting traces to Jaeger via gRPC | Integrated OpenTelemetry distributed tracing with Jaeger backend for end-to-end request visibility |
| **Pino Structured Logging** | JSON structured logs with request IDs, service metadata, ISO timestamps, custom serializers, and health-check filtering | Implemented structured JSON logging with Pino including request correlation IDs, custom serializers, and auto-logging exclusions |
| **Request ID Correlation** | UUID-based request IDs propagated via `x-request-id` header across logs and responses | Implemented request ID correlation using UUID propagation via `x-request-id` for cross-service log tracing |
| **Cron Job Scheduling** | `node-cron` daily jobs at 1 AM for alert lifecycle management with idempotent upsert logic | Built scheduled background jobs with idempotent alert lifecycle management running daily cron cycles |
| **Frontend Query Caching** | React Query with 30s stale time, single retry, and disabled window refocus | Optimized frontend data fetching with React Query caching (30s stale time) and controlled retry policies |
| **Axios Interceptors** | Automatic token injection, silent 401 refresh, ID normalization, and deduplicated refresh requests | Implemented Axios request/response interceptors for automatic auth, silent token refresh, and response normalization |
| **Multi-Stage Docker Build** | Builder stage compiles TypeScript; Runner stage copies only production deps and dist — minimal image size | Optimized Docker image with multi-stage build separating compilation from runtime for minimal production image |

### DevOps & Deployment

| Practice | Implementation | Resume Bullet |
|----------|---------------|---------------|
| **Docker Compose** | 3-service stack: MongoDB, Jaeger, Backend with persistent volumes, bridge networking, and restart policies | Orchestrated 3-service Docker Compose stack (MongoDB, Jaeger, Backend) with persistent volumes and bridge networking |
| **Nginx Reverse Proxy** | Frontend static serving with SPA fallback + API proxy with WebSocket upgrade support | Configured Nginx reverse proxy with SPA fallback routing and WebSocket upgrade support |
| **Electron Desktop Packaging** | electron-builder with NSIS installer, ASAR packaging, filtered extraResources, and UNC network path support | Packaged desktop application with electron-builder (NSIS installer), ASAR optimization, and network share compatibility |
| **LAN Server Architecture** | Electron host spawns detached backend process that persists after UI close; clients auto-discover host via UNC path resolution | Designed LAN server architecture with detached backend process lifecycle, auto-discovery via UNC path, and Windows startup registration |
| **Windows Auto-Start** | VBScript + batch launcher registered in `HKCU\...\Run` for headless backend startup on Windows boot | Automated Windows startup registration using registry-based VBScript launcher for persistent backend service |
| **Firewall Auto-Configuration** | `netsh` commands to auto-create inbound TCP rules for backend port | Implemented automatic Windows firewall rule provisioning for LAN backend accessibility |
| **Seed Scripts** | 4 dedicated seed scripts for admin, test alerts, past records, and full dataset initialization | Built data seeding pipeline with 4 specialized scripts for development, testing, and data migration |
| **Vitest + MongoDB Memory Server** | Integration tests with in-memory MongoDB, per-test collection cleanup, and Supertest HTTP assertions | Implemented integration test suite with Vitest, in-memory MongoDB, per-test isolation, and HTTP-level assertions via Supertest |
| **Prettier + ESLint** | Consistent code formatting and linting across the entire monorepo | Enforced consistent code quality with Prettier formatting and ESLint linting across the monorepo |
| **Conventional Commits** | `feat:`, `fix:`, `docs:` prefixed commits visible in git log | Followed conventional commit specification for semantic versioning and changelog generation |

---

## 4. Technology Stack Summary

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 19, TypeScript, Vite, TailwindCSS, Zustand, React Query, React Hook Form, Zod, Socket.io Client, Axios |
| **Backend** | Node.js, Express 5, TypeScript, Mongoose/MongoDB, Socket.io, Zod, Pino, JWT, bcrypt |
| **Desktop** | Electron 34, electron-builder, NSIS |
| **Observability** | Prometheus (prom-client), Jaeger (OpenTelemetry), Pino structured logging |
| **Infrastructure** | Docker, Docker Compose, Nginx, PM2, multi-stage builds |
| **Testing** | Vitest, Supertest, MongoDB Memory Server, V8 coverage |
| **DevOps** | Turborepo, pnpm workspaces, Prettier, ESLint, conventional commits |

---

## 5. Top Resume Bullet Points (2 YoE Backend/Full-Stack Engineer)

> Pick the strongest 6–8 for your resume. Each is written to demonstrate impact and technical depth.

1. **Architected a Turborepo monorepo** managing 3 TypeScript applications (Express API, React SPA, Electron desktop) and 4 shared packages, enabling parallel CI builds and unified dependency management.

2. **Designed a finite state machine** governing 15+ insurance claim statuses across cashless and reimbursement workflows, with business-rule guards (reconsideration windows, mandatory fields, amount-change restrictions) enforced at the service layer.

3. **Built a real-time notification system** using Socket.io with JWT-authenticated WebSocket connections, Zustand state management, browser push notifications, and SMTP email integration for multi-channel claim status alerts.

4. **Implemented full observability stack** with Prometheus metrics (5 custom instruments with per-route cardinality), Jaeger distributed tracing via OpenTelemetry, and Pino structured JSON logging with request ID correlation.

5. **Engineered WebSocket-based pessimistic concurrency control** preventing simultaneous claim editing across LAN clients, with device-level lock tracking and automatic release on socket disconnect.

6. **Developed a financial settlement engine** computing hybrid discounts across department-level breakdowns with vendor/hospital payout splits, TDS deductions, and automated payer contract policy application.

7. **Hardened API security** with Helmet headers, NoSQL injection sanitization, per-IP rate limiting, Zod request validation, HTTPS/TLS enforcement, CORS whitelisting, and dual JWT token rotation with bcrypt-hashed refresh tokens.

8. **Packaged as an Electron desktop application** with embedded backend server, LAN client auto-discovery via UNC path resolution, Windows auto-start registration, and automatic firewall rule provisioning.

9. **Deployed via Docker Compose** with multi-stage builds (compile → runtime), PM2 cluster mode across all CPU cores, Nginx reverse proxy with WebSocket upgrade, and persistent MongoDB volumes.

10. **Built integration test suite** using Vitest with MongoDB Memory Server for isolated database testing, Supertest for HTTP assertions, and V8 coverage reporting.
