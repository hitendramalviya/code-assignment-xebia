const TREE_DATA = {
  'tree': [
    {
      'node': {
        'id': '1',
        'description': 'test1',
        'children': [
          {
            'node': {
              'id': '1.1',
              'description': 'test1.1',
              'children': []
            }
          },
          {
            'node': {
              'id': '1.2',
              'description': 'test1.2',
              'children': []
            }
          }
        ]
      }
    },
    {
      'node': {
        'id': '2',
        'description': 'test2',
        'children': [
          {
            'node': {
              'id': '2.1',
              'description': 'test2.1',
              'children': []
            }
          },
          {
            'node': {
              'id': '2.2',
              'description': 'test2.2',
              'children': [
                {
                  'node': {
                    'id': '2.2.1',
                    'description': 'test2.2.1',
                    'children': []
                  }
                },
                {
                  'node': {
                    'id': '2.2.2',
                    'description': 'test2.2.2',
                    'children': []
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};

export default TREE_DATA;
