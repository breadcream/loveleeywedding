const modules = import.meta.glob('../../assets/wedding/*.{jpg,png,jpeg}', {
  eager: true,
  import: 'default',
});

const images: string[] = Object.values(modules) as string[];

export default images;
