// =====================================================
// CITY V2 — EXTERNAL ASSET REPOSITORY CONFIG V1
// =====================================================

const publicBaseUrl =
  String(process.env.ASSET_PUBLIC_BASE_URL || '')
    .trim()
    .replace(/\/+$/, '') ||
  'https://assets.example.com/v1'

export const ASSET_PIPELINE_CONFIG = Object.freeze({
  version: 1,
  sourceDirectory: 'assets-source',
  outputDirectory: 'generated/v1',
  manifestFile: 'generated/v1/asset-manifest.json',
  publicBaseUrl,

  supportedExtensions: ['.png', '.jpg', '.jpeg', '.webp'],

  rules: [
    {
      name: 'shopping-category',
      match: /(^|\/)shopping-center\/categories\//i,
      sizes: [128, 256],
      quality: 80,
      maxBytes: { 128: 18_000, 256: 35_000 }
    },
    {
      name: 'product',
      match: /(^|\/)items\//i,
      sizes: [128, 256, 512],
      quality: 80,
      maxBytes: { 128: 18_000, 256: 35_000, 512: 110_000 }
    },
    {
      name: 'portrait',
      match: /(^|\/)(opponents|portraits)\//i,
      sizes: [128, 256, 512],
      quality: 82,
      maxBytes: { 128: 20_000, 256: 45_000, 512: 130_000 }
    },
    {
      name: 'building',
      match: /(^|\/)buildings\//i,
      sizes: [256, 512, 1024],
      quality: 82,
      maxBytes: { 256: 60_000, 512: 170_000, 1024: 420_000 }
    },
    {
      name: 'background',
      match: /(^|\/)(backgrounds|interiors)\//i,
      sizes: [540, 1080],
      quality: 80,
      maxBytes: { 540: 180_000, 1080: 500_000 }
    },
    {
      name: 'default',
      match: /.*/,
      sizes: [256, 512],
      quality: 80,
      maxBytes: { 256: 50_000, 512: 140_000 }
    }
  ]
})

export default ASSET_PIPELINE_CONFIG

