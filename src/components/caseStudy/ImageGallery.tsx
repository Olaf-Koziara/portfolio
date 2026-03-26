"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageGalleryProps {
  images?: {
    src: string;
    alt: string;
  }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  // Placeholders if no images provided
  const displayImages = images || [];

  return (
    displayImages.length > 0 && (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {displayImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video bg-card-bg rounded-2xl border border-border flex items-center justify-center overflow-hidden"
              >
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <p className="text-muted">{image.alt}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  );
}
