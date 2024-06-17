import { AnyArrayType, AnyType } from "src/types/app-types";

export const Delay = (milliseconds: number): MethodDecorator => {
  return (_target: AnyType, _propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: AnyArrayType[]) {
      await new Promise((resolve) => setTimeout(resolve, milliseconds));
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
};
