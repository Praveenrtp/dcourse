import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDollarCourses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DollarCourses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly title?: string | null;
  readonly img?: string | null;
  readonly desc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDollarCourses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DollarCourses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly title?: string | null;
  readonly img?: string | null;
  readonly desc?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DollarCourses = LazyLoading extends LazyLoadingDisabled ? EagerDollarCourses : LazyDollarCourses

export declare const DollarCourses: (new (init: ModelInit<DollarCourses>) => DollarCourses) & {
  copyOf(source: DollarCourses, mutator: (draft: MutableModel<DollarCourses>) => MutableModel<DollarCourses> | void): DollarCourses;
}