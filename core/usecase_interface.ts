export default interface UsecaseI<T> {
  run(dto: T): void;
}
