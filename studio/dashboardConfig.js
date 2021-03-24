export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605b63a9f70a77007fd6752c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cqx5z3g6',
                  apiId: '4588269c-d748-4099-9813-c0638cc47665'
                },
                {
                  buildHookId: '605b63a9cf54cf053db9f25e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xt9gbrdv',
                  apiId: 'cdd0a147-6169-48fe-b751-3927a94aa591'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kjones60625/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xt9gbrdv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
