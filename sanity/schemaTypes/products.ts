export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
          { title: 'Sneakers', value: 'sneakers' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
    },
    {
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in stock' },
          { title: 'Out of Stock', value: 'out of stock' },
          { title: 'Sale', value: 'sale' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isNewArrival',
      title: 'Is New Arrival',
      type: 'boolean',
      description: 'Check this if the product should appear in New & Featured section',
      initialValue: false,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'productName',
      subtitle: 'category',
      media: 'image',
    },
  },
}
