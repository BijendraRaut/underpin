'use client';

export default function VideoGallery() {
  const videos = [
    'https://sagarflorist.com/wp-content/uploads/2024/12/pinterestdownloader.com-1733386079.673412.mp4',
    'https://cdn.shopify.com/videos/c/o/v/81a9db2341244172b3c2308ba2526cfa.mp4',
    // 'https://sagarflorist.com/wp-content/uploads/2024/12/Snapinsta.app_video_94413532C99C460D4870E2FC1C0E1BB3_video_dashinit.mp4',
    'https://sagarflorist.com/wp-content/uploads/2024/12/1727695906802886-2-1.mp4',
    'https://sagarflorist.com/wp-content/uploads/2024/12/pinterestdownloader.com-1732443239.418494.mp4',
    'https://sagarflorist.com/wp-content/uploads/2024/12/pinterestdownloader.com-1733385988.923723.mp4',
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Video Gallery</h2>
        <p className="mb-6">Watch our latest videos showcasing our flowers and spiritual paraphernalia.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <video autoPlay muted loop className="w-full h-auto">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
