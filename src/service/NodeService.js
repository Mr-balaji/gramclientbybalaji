export const NodeService = {
    getTreeTableNodesData() {
        return [
            {
                key: '0',
                data: {
                    name: 'Cloud',
                    HR1: '10,032',
                    HR2: '10,032',
                    HR3: '10,032',
                    HR4: '10,032',
                    HR5: '10,032',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'Cloud',
                            HR1: '10,032',
                            HR2: '10,032',
                            HR3: '10,032',
                            HR4: '10,032',
                            HR5: '10,032',
                            type: 'Folder'
                        },
                    },
                ]
            },
            {
                key: '1',
                data: {
                    name: 'L&S',
                    HR1: '10,032',
                    HR2: '10,032',
                    HR3: '10,032',
                    HR4: '10,032',
                    HR5: '10,032',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'L&S',
                            HR1: '10,032',
                            HR2: '10,032',
                            HR3: '10,032',
                            HR4: '10,032',
                            HR5: '10,032',
                            type: 'Folder'
                        },
                    },
                ]
            },
            {
                key: '2',
                data: {
                    name: 'Software',
                    HR1: '10,032',
                    HR2: '10,032',
                    HR3: '10,032',
                    HR4: '10,032',
                    HR5: '10,032',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'Software',
                            HR1: '10,032',
                            HR2: '10,032',
                            HR3: '10,032',
                            HR4: '10,032',
                            HR5: '10,032',
                            type: 'Folder'
                        },
                    },
                ]
            },
            {
                key: '3',
                data: {
                    name: 'Security',
                    HR1: '10,032',
                    HR2: '10,032',
                    HR3: '10,032',
                    HR4: '10,032',
                    HR5: '10,032',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'Security',
                            HR1: '10,032',
                            HR2: '10,032',
                            HR3: '10,032',
                            HR4: '10,032',
                            HR5: '10,032',
                            type: 'Folder'
                        },
                    },
                ]
            },
            {
                key: '4',
                data: {
                    name: 'ESS',
                    HR1: '10,032',
                    HR2: '10,032',
                    HR3: '10,032',
                    HR4: '10,032',
                    HR5: '10,032',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'ESS',
                            HR1: '10,032',
                            HR2: '10,032',
                            HR3: '10,032',
                            HR4: '10,032',
                            HR5: '10,032',
                            type: 'Folder'
                        },
                    },
                ]
            },
            {
                key: '5',
                data: {
                    name: 'Networking',
                    HR1: '10,032',
                    HR2: '10,032',
                    HR3: '10,032',
                    HR4: '10,032',
                    HR5: '10,032',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'Networking',
                            HR1: '10,032',
                            HR2: '10,032',
                            HR3: '10,032',
                            HR4: '10,032',
                            HR5: '10,032',
                            type: 'Folder'
                        },
                    },
                ]
            },
            {
                key: '6',
                data: {
                    name: 'DellEMC',
                    HR1: '10,032',
                    HR2: '10,032',
                    HR3: '10,032',
                    HR4: '10,032',
                    HR5: '10,032',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'DellEMC',
                            HR1: '10,032',
                            HR2: '10,032',
                            HR3: '10,032',
                            HR4: '10,032',
                            HR5: '10,032',
                            type: 'Folder'
                        },
                    },
                ]
            },
            {
                key: '7',
                data: {
                    name: 'DellEMC',
                    HR1: '10,032',
                    HR2: '10,032',
                    HR3: '10,032',
                    HR4: '10,032',
                    HR5: '10,032',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'DellEMC',
                            HR1: '10,032',
                            HR2: '10,032',
                            HR3: '10,032',
                            HR4: '10,032',
                            HR5: '10,032',
                            type: 'Folder'
                        },
                    },
                ]
            },
            
        ];
    },

    getTreeTableNodes() {
        return Promise.resolve(this.getTreeTableNodesData());
    },

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }
};
