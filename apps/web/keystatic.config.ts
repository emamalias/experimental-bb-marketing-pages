
import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
		//
  },

	singletons: {
		navigation: singleton({
      label: 'Navigation',
      path: 'src/content/navigation',
      schema: {
        navGroups: fields.array(
          fields.object({
            groupName: fields.text({ label: 'Group name' }),
            items: fields.array(
              fields.object({
                label: fields.text({
                  label: 'Label',
                  description:
                    "Required when using a URL, or overriding the page's title",
                }),
                link: fields.conditional(
                  fields.select({
                    label: 'Link type',
                    options: [
                      { label: 'Page', value: 'page' },
                      { label: 'URL', value: 'url' },
                      { label: 'Coming soon (no link)', value: 'coming-soon' },
                    ],
                    defaultValue: 'page',
                  }),
                  {
                    page: fields.relationship({
                      label: 'Page',
                      collection: 'pages',
                    }),
                    url: fields.text({ label: 'URL' }),
                    'coming-soon': fields.empty(),
                  }
                ),
                status: fields.select({
                  label: 'Status',
                  options: [
                    { label: 'Default', value: 'default' },
                    { label: 'New', value: 'new' },
                    { label: 'Experimental', value: 'experimental' },
                    { label: 'Deprecated', value: 'deprecated' },
                  ],
                  defaultValue: 'default',
                }),
              }),
              {
                label: 'Navigation items',
                itemLabel: props => props.fields.label.value,
              }
            ),
          }),
          {
            label: 'Navigation groups',
            itemLabel: props => props.fields.groupName.value,
          }
        ),
      },
    }),
	}
});
