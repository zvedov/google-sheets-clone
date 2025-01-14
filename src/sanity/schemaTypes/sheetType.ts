import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const sheetType = defineType({
  name: 'sheet',
  title: 'Sheet',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Sheet Name',
      type: 'string',
    }),
    defineField({
        name: 'data',
        title: 'Data',
        type: 'array',
        of: [{ type: 'string' }],
    }),
  ],
})
