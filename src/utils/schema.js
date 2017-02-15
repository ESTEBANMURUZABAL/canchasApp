import { normalize, Schema, arrayOf,valuesOf,unionOf } from 'normalizr';

const timingSchema = new Schema('timings');
const canchaSchema = new Schema('canchas');
const appointmentSchema = new Schema('appointments');

export const Schemas = {
  APPOINTMENT:appointmentSchema,
  APPOINTMENT_ARRAY:arrayOf(appointmentSchema),
  TIMING:timingSchema,
  TIMING_ARRAY:arrayOf(timingSchema),
  CANCHA:canchaSchema,
  CANCHAS_ARRAY:arrayOf(canchaSchema)
};
