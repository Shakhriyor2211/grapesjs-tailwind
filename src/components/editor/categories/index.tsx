import { basic_blocks } from "./basic";
import { blog_blocks } from "./blog";
import { content_blocks } from "./content";
import { feature_blocks } from "./features";
import { gallery_blocks } from "./gallery";
import { statistic_blocks } from "./statistic";
import { step_blocks } from "./steps";
import { team_blocks } from "./team";
import { testimonial_blocks } from "./testimonials";

export const category_blocks = [
  ...basic_blocks,
  ...blog_blocks,
  ...content_blocks,
  ...feature_blocks,
  ...gallery_blocks,
  ...statistic_blocks,
  ...step_blocks,
  ...team_blocks,
  ...testimonial_blocks,
];
