declare module "aos" {
  interface AOSStatic {
    init(options?: any): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AOSStatic;
  export default AOS;
}
