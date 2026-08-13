import type { ProjectBuilder } from '.'

export default function (): ProjectBuilder {
  return {
    id: 'stupd-object-detection',
    title: 'StupdObjectDetection',
    description:
      "Demonstrates how to integrate a webcam with TensorFlow's object detection capabilities",
    bannerSrc:
      'https://github.com/abcdavk/simple-object-detection/blob/main/public/img/image.png?raw=true',
    primaryBtn: {
      href: 'https://simple-object-detection.vercel.app/',
    },
  }
}
