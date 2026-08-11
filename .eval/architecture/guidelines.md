# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Public functions are declared with `export function`.

- `client/src/components/layout/Navbar.tsx`:

  ```
  export function Navbar() {
  ```

- `client/src/components/layout/Sidebar.tsx`:

  ```
  export function Sidebar({ active, onSelect }: Props) {
  ```

## Rejected (insufficient evidence)

- Single-example convention (demo). — only 1 example(s) — no convention
