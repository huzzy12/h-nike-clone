export default function FavoritesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Empty state */}
        <p className="text-gray-500 col-span-full">No favorites yet</p>
      </div>
    </div>
  )
}