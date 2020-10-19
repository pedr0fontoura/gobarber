export default interface ICacheProvider {
  save(key: string, value: string): Promise<void>;
  recover(key: string | null): Promise<string>;
  invalidate(key: string): Promise<void>;
}
