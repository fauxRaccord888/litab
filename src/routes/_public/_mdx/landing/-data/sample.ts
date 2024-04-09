import type { DBPentagram_SELECT } from "$feature/Pentagram/types";
import type { FeedItems } from "$feature/feed/types";

export const similaritySample: DBPentagram_SELECT = {
    "__typename": "pentagrams",
    "id": "e7b143c8-05b6-40e3-974d-ebdc6d878578",
    "description": null,
    "created_at": "2024-04-08T06:50:03.21252+00:00",
    "users": {
        "__typename": "users",
        "mutable_id": "fauxRaccord8",
        "nickname": "fauxRaccord",
        "id": "ade74faf-452f-4d86-9969-8562d50a5a5e",
        "updated_at": "2024-03-26T15:21:33.389+00:00"
    },
    "pentagram_nodesCollection": {
        "__typename": "pentagram_nodesConnection",
        "edges": [
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "afe3cbe1-3deb-48a9-8306-681d3d488f11",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "a5323dcc-d477-45a7-a65f-7ed0affe6492",
                        "title": "슬램덩크",
                        "updated_at": "2024-04-08T06:38:36+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "d8ea4047-bbb3-48c9-b09c-7728f95e8d9a",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "a5323dcc-d477-45a7-a65f-7ed0affe6492",
                                            "title": "슬램덩크",
                                            "updated_at": "2024-04-08T06:38:36+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-08T06:50:03.21252+00:00"
                                    },
                                    "current_angle": 0,
                                    "current_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "bd8533e2-ec71-4a9c-b362-f9c05228a629",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "89b29505-a803-49e0-9f21-9d647f65ee72",
                        "title": "노르웨이의 숲",
                        "updated_at": "2024-04-08T06:39:05+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "33d6a15c-ac5a-4afe-965d-8689f17e16ce",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "89b29505-a803-49e0-9f21-9d647f65ee72",
                                            "title": "노르웨이의 숲",
                                            "updated_at": "2024-04-08T06:39:05+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-08T06:50:03.21252+00:00"
                                    },
                                    "current_angle": 20,
                                    "current_distance": 84
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            }
        ]
    },
    "pentagram_revisionsCollection": {
        "__typename": "pentagram_revisionsConnection",
        "edges": [
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "b7ac064a-0b43-4cf4-9a98-ca6f011a0da1",
                    "created_at": "2024-04-08T06:50:03.21252+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "e7b143c8-05b6-40e3-974d-ebdc6d878578"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 2
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            }
        ]
    }
}

export const differenceSample: DBPentagram_SELECT = {
    "__typename": "pentagrams",
    "id": "a0fcbd8d-4fd3-4c15-a8f7-d1b5b8423b9a",
    "description": null,
    "created_at": "2024-04-08T06:59:52.288725+00:00",
    "users": {
        "__typename": "users",
        "mutable_id": "fauxRaccord8",
        "nickname": "fauxRaccord",
        "id": "ade74faf-452f-4d86-9969-8562d50a5a5e",
        "updated_at": "2024-03-26T15:21:33.389+00:00"
    },
    "pentagram_nodesCollection": {
        "__typename": "pentagram_nodesConnection",
        "edges": [
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "34f85851-5cd6-4cde-827d-f6d3b6aca884",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "89b29505-a803-49e0-9f21-9d647f65ee72",
                        "title": "노르웨이의 숲",
                        "updated_at": "2024-04-08T06:39:05+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "c394fd0a-35e1-4d85-b0ab-8b55149940ea",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "89b29505-a803-49e0-9f21-9d647f65ee72",
                                            "title": "노르웨이의 숲",
                                            "updated_at": "2024-04-08T06:39:05+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-08T06:59:52.288725+00:00"
                                    },
                                    "current_angle": 18,
                                    "current_distance": 84
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "64b0394b-3566-4a53-b76d-632113a991ce",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "3aaf783b-ca1e-4095-9f41-a8e6046379c9",
                        "title": "12",
                        "updated_at": "2024-04-08T06:37:27+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "50accc7d-2a3e-4a04-b721-a26b023e432c",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "3aaf783b-ca1e-4095-9f41-a8e6046379c9",
                                            "title": "12",
                                            "updated_at": "2024-04-08T06:37:27+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-08T07:00:08.94564+00:00"
                                    },
                                    "current_angle": 72,
                                    "current_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "c04316f2-e070-4a0b-aea3-517556368eff",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "a9764c2f-e28c-48f9-950b-79c3554e0f8b",
                        "title": "The Anecdote",
                        "updated_at": "2024-04-08T06:38:07+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "84768b45-626b-4028-94c4-5b1977131eb7",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "a9764c2f-e28c-48f9-950b-79c3554e0f8b",
                                            "title": "The Anecdote",
                                            "updated_at": "2024-04-08T06:38:07+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-08T07:00:08.94564+00:00"
                                    },
                                    "current_angle": 288,
                                    "current_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "c08fa649-fc21-420f-871d-1ec4fdfc1c41",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "a5323dcc-d477-45a7-a65f-7ed0affe6492",
                        "title": "슬램덩크",
                        "updated_at": "2024-04-08T06:38:36+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "bee57873-545c-416b-9b61-e91d1abbc9b3",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "a5323dcc-d477-45a7-a65f-7ed0affe6492",
                                            "title": "슬램덩크",
                                            "updated_at": "2024-04-08T06:38:36+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-08T06:59:52.288725+00:00"
                                    },
                                    "current_angle": 0,
                                    "current_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            }
        ]
    },
    "pentagram_revisionsCollection": {
        "__typename": "pentagram_revisionsConnection",
        "edges": [
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "8830c21e-da6c-4c22-ba6a-b256b770feb8",
                    "created_at": "2024-04-08T07:00:08.94564+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "a0fcbd8d-4fd3-4c15-a8f7-d1b5b8423b9a"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 2
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "c6bb9927-a558-47d8-a936-498b87b9b497",
                    "created_at": "2024-04-08T06:59:52.288725+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "a0fcbd8d-4fd3-4c15-a8f7-d1b5b8423b9a"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 2
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            }
        ]
    }
}

export const timelapseSample: DBPentagram_SELECT = {
    "__typename": "pentagrams",
    "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd",
    "description": "",
    "created_at": "2024-03-25T21:23:46.334179+00:00",
    "users": {
        "__typename": "users",
        "mutable_id": "fauxRaccord8",
        "nickname": "fauxRaccord",
        "id": "ade74faf-452f-4d86-9969-8562d50a5a5e",
        "updated_at": "2024-03-26T15:21:33.389+00:00"
    },
    "pentagram_nodesCollection": {
        "__typename": "pentagram_nodesConnection",
        "edges": [
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "097c8f1c-7cc0-4b1f-9a54-ecab7b040101",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "3bfa432a-5039-4e37-9014-939e7caa38d1",
                        "title": "저녁의 기원",
                        "updated_at": "2024-03-24T22:42:41+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "c7be20e0-c7a7-47d2-b62c-a69827f110b8",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "3bfa432a-5039-4e37-9014-939e7caa38d1",
                                            "title": "저녁의 기원",
                                            "updated_at": "2024-03-24T22:42:41+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 288,
                                    "current_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "1f2405a7-c7c4-4e78-b2b4-06304d85bc53",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "3bfa432a-5039-4e37-9014-939e7caa38d1",
                                            "title": "저녁의 기원",
                                            "updated_at": "2024-03-24T22:42:41+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-03T14:19:40.499677+00:00"
                                    },
                                    "previous_angle": 288,
                                    "previous_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "1ed41c02-230e-489e-a806-15340ddfa844",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "4183acd1-bfb8-4230-9707-4342e1d95636",
                        "title": "Legend",
                        "updated_at": "2024-03-24T23:34:02.352+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "693599dc-1cb3-4170-92ad-030f81978be4",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "4183acd1-bfb8-4230-9707-4342e1d95636",
                                            "title": "Legend",
                                            "updated_at": "2024-03-24T23:34:02.352+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 233,
                                    "current_distance": 86
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "2bef9874-6a53-41f6-b79f-2667202b01de",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "c8b63387-30d5-4d54-8302-2e23a7ae3186",
                        "title": "안녕, 에리",
                        "updated_at": "2024-03-24T21:57:32.58+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_update_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_update_records",
                                    "id": "bef9a9b4-cae6-4b54-952a-698ab7c289d9",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "c8b63387-30d5-4d54-8302-2e23a7ae3186",
                                            "title": "안녕, 에리",
                                            "updated_at": "2024-03-24T21:57:32.58+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-03T14:19:40.499677+00:00"
                                    },
                                    "current_angle": 62,
                                    "current_distance": 40,
                                    "previous_angle": 73,
                                    "previous_distance": 83
                                }
                            }
                        ]
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "f02d14f7-61e6-4a8f-b5ec-421b3eed9723",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "c8b63387-30d5-4d54-8302-2e23a7ae3186",
                                            "title": "안녕, 에리",
                                            "updated_at": "2024-03-24T21:57:32.58+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T04:48:04.745094+00:00"
                                    },
                                    "current_angle": 73,
                                    "current_distance": 83
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "3db42e54-198a-4c12-a96b-f91dbaa6c981",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "e369890c-aa00-4218-a741-7811c3b69a94",
                        "title": "우리의 사람들",
                        "updated_at": "2024-03-24T22:09:47.242+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_update_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_update_records",
                                    "id": "d538b1ec-3da0-47f7-8b0d-7cb67acf8b08",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "e369890c-aa00-4218-a741-7811c3b69a94",
                                            "title": "우리의 사람들",
                                            "updated_at": "2024-03-24T22:09:47.242+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T04:47:49.412999+00:00"
                                    },
                                    "current_angle": 28,
                                    "current_distance": 11,
                                    "previous_angle": 261,
                                    "previous_distance": 44
                                }
                            }
                        ]
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "ddca482e-017f-46b9-a668-86a102aef7a2",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "e369890c-aa00-4218-a741-7811c3b69a94",
                                            "title": "우리의 사람들",
                                            "updated_at": "2024-03-24T22:09:47.242+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-31T08:00:39.292941+00:00"
                                    },
                                    "current_angle": 261,
                                    "current_distance": 44
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "426cf764-8b1d-45d0-8983-b1022e415fee",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "6264dc11-5a9f-4c1f-9749-d07974165728",
                        "title": "탑승수속",
                        "updated_at": "2024-03-24T23:37:49.838+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_update_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_update_records",
                                    "id": "e74b288f-caa8-44e2-8bd1-b7d854601d7a",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "6264dc11-5a9f-4c1f-9749-d07974165728",
                                            "title": "탑승수속",
                                            "updated_at": "2024-03-24T23:37:49.838+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-31T08:00:39.292941+00:00"
                                    },
                                    "current_angle": 316,
                                    "current_distance": 75,
                                    "previous_angle": 293,
                                    "previous_distance": 56
                                }
                            }
                        ]
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "ae526998-aa79-4d3e-914f-5b371dfe88ce",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "6264dc11-5a9f-4c1f-9749-d07974165728",
                                            "title": "탑승수속",
                                            "updated_at": "2024-03-24T23:37:49.838+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-27T03:22:02.655647+00:00"
                                    },
                                    "current_angle": 293,
                                    "current_distance": 56
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "631e9b4f-df12-474d-9089-323c04c1e058",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "6264dc11-5a9f-4c1f-9749-d07974165728",
                                            "title": "탑승수속",
                                            "updated_at": "2024-03-24T23:37:49.838+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:38:26.902253+00:00"
                                    },
                                    "previous_angle": 316,
                                    "previous_distance": 75
                                }
                            },
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "d06741b7-bfc9-4d33-a068-3306ea72d45b",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "6264dc11-5a9f-4c1f-9749-d07974165728",
                                            "title": "탑승수속",
                                            "updated_at": "2024-03-24T23:37:49.838+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T04:47:49.412999+00:00"
                                    },
                                    "previous_angle": 316,
                                    "previous_distance": 75
                                }
                            }
                        ]
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_recover_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_recover_records",
                                    "id": "874e28d6-4377-4e7d-a531-6328b97755be",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "6264dc11-5a9f-4c1f-9749-d07974165728",
                                            "title": "탑승수속",
                                            "updated_at": "2024-03-24T23:37:49.838+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:38:36.256021+00:00"
                                    },
                                    "current_angle": 316,
                                    "current_distance": 75
                                }
                            },
                            {
                                "__typename": "pentagram_revision_recover_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_recover_records",
                                    "id": "d20549fe-1b30-4fd3-95e5-d061b96a5aa6",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "6264dc11-5a9f-4c1f-9749-d07974165728",
                                            "title": "탑승수속",
                                            "updated_at": "2024-03-24T23:37:49.838+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:38:20.808803+00:00"
                                    },
                                    "current_angle": 316,
                                    "current_distance": 75
                                }
                            }
                        ]
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "55f0965c-4644-4985-99a9-f4c0fc92c239",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "ce5664a9-40cb-4a0a-b170-ecc56106ce98",
                        "title": "사춘기",
                        "updated_at": "2024-03-24T22:42:29+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "478c5ad4-73d8-416b-bda1-02ea99895efa",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "ce5664a9-40cb-4a0a-b170-ecc56106ce98",
                                            "title": "사춘기",
                                            "updated_at": "2024-03-24T22:42:29+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 144,
                                    "current_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "6540e15a-6368-4f32-a8f9-13bf46b404d5",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "624fe3d8-ab71-45b8-81cd-b23e1663e90c",
                        "title": "drukqs",
                        "updated_at": "2024-03-24T23:30:35.716+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_update_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_update_records",
                                    "id": "fba9f70b-8528-42d9-af3e-7354eaad9338",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "624fe3d8-ab71-45b8-81cd-b23e1663e90c",
                                            "title": "drukqs",
                                            "updated_at": "2024-03-24T23:30:35.716+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:39:13.714174+00:00"
                                    },
                                    "current_angle": 188,
                                    "current_distance": 79,
                                    "previous_angle": 165,
                                    "previous_distance": 57
                                }
                            }
                        ]
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "5b0a26a6-350b-4a82-b946-1d547c4ede6d",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "624fe3d8-ab71-45b8-81cd-b23e1663e90c",
                                            "title": "drukqs",
                                            "updated_at": "2024-03-24T23:30:35.716+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 165,
                                    "current_distance": 57
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "77e90156-c2e9-4df9-9a3e-f491dab831cd",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "db3a994d-c45d-45c6-96b8-e141d2289e8d",
                        "title": "Praise a Lord Who Chews but Which Does Not Consume; (Or Simply, Hot Between Worlds)",
                        "updated_at": "2024-03-24T22:34:51.704+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_update_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_update_records",
                                    "id": "2af83a6b-5c7f-4d34-94d2-19e82294bc65",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "db3a994d-c45d-45c6-96b8-e141d2289e8d",
                                            "title": "Praise a Lord Who Chews but Which Does Not Consume; (Or Simply, Hot Between Worlds)",
                                            "updated_at": "2024-03-24T22:34:51.704+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:39:13.714174+00:00"
                                    },
                                    "current_angle": 329,
                                    "current_distance": 40,
                                    "previous_angle": 49,
                                    "previous_distance": 82
                                }
                            }
                        ]
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "732ed9cb-98f7-43d7-b81d-3e5c178c5a56",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "db3a994d-c45d-45c6-96b8-e141d2289e8d",
                                            "title": "Praise a Lord Who Chews but Which Does Not Consume; (Or Simply, Hot Between Worlds)",
                                            "updated_at": "2024-03-24T22:34:51.704+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 49,
                                    "current_distance": 82
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "d1eb9e65-f866-4fc7-9ddd-64149895348c",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "db3a994d-c45d-45c6-96b8-e141d2289e8d",
                                            "title": "Praise a Lord Who Chews but Which Does Not Consume; (Or Simply, Hot Between Worlds)",
                                            "updated_at": "2024-03-24T22:34:51.704+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T04:47:49.412999+00:00"
                                    },
                                    "previous_angle": 49,
                                    "previous_distance": 82
                                }
                            },
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "f19832f1-6bf4-4190-b467-65cab93cd8c6",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "db3a994d-c45d-45c6-96b8-e141d2289e8d",
                                            "title": "Praise a Lord Who Chews but Which Does Not Consume; (Or Simply, Hot Between Worlds)",
                                            "updated_at": "2024-03-24T22:34:51.704+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-31T07:59:06.699594+00:00"
                                    },
                                    "previous_angle": 49,
                                    "previous_distance": 82
                                }
                            }
                        ]
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_recover_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_recover_records",
                                    "id": "26245f24-570a-4f57-877f-e19c8b969716",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "db3a994d-c45d-45c6-96b8-e141d2289e8d",
                                            "title": "Praise a Lord Who Chews but Which Does Not Consume; (Or Simply, Hot Between Worlds)",
                                            "updated_at": "2024-03-24T22:34:51.704+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-31T07:59:16.421097+00:00"
                                    },
                                    "current_angle": 49,
                                    "current_distance": 82
                                }
                            },
                            {
                                "__typename": "pentagram_revision_recover_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_recover_records",
                                    "id": "28aded33-854e-4fdd-bb7c-27651a5686da",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "db3a994d-c45d-45c6-96b8-e141d2289e8d",
                                            "title": "Praise a Lord Who Chews but Which Does Not Consume; (Or Simply, Hot Between Worlds)",
                                            "updated_at": "2024-03-24T22:34:51.704+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:39:05.21357+00:00"
                                    },
                                    "current_angle": 49,
                                    "current_distance": 82
                                }
                            }
                        ]
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "7f5b9a7d-2e5b-45f6-ae84-20a5912bc7e9",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "310389d6-2bbc-4960-a88a-20ddf36976d8",
                        "title": "두 사람이 걸어가",
                        "updated_at": "2024-03-24T22:43:02+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "0b5cb316-0bd6-4114-b28e-85efb450cfb3",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "310389d6-2bbc-4960-a88a-20ddf36976d8",
                                            "title": "두 사람이 걸어가",
                                            "updated_at": "2024-03-24T22:43:02+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 216,
                                    "current_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "95a73b2a-a0fa-42c0-bbc8-ab04b0690b82",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "89d4c2c0-f2b6-43db-b93f-69e5080c33f4",
                        "title": "젤다의 전설: 야생의 숨결",
                        "updated_at": "2024-03-24T22:42:14+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_update_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_update_records",
                                    "id": "1ed887d5-4b8a-4f27-b6a7-0f26eb263dae",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "89d4c2c0-f2b6-43db-b93f-69e5080c33f4",
                                            "title": "젤다의 전설: 야생의 숨결",
                                            "updated_at": "2024-03-24T22:42:14+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:39:13.714174+00:00"
                                    },
                                    "current_angle": 21,
                                    "current_distance": 84,
                                    "previous_angle": 1,
                                    "previous_distance": 54
                                }
                            }
                        ]
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "af7699b2-d9a9-4579-9f2d-96afab1eea46",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "89d4c2c0-f2b6-43db-b93f-69e5080c33f4",
                                            "title": "젤다의 전설: 야생의 숨결",
                                            "updated_at": "2024-03-24T22:42:14+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 1,
                                    "current_distance": 54
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "75e4c32c-41d2-42ca-a047-a18e35b18f19",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "89d4c2c0-f2b6-43db-b93f-69e5080c33f4",
                                            "title": "젤다의 전설: 야생의 숨결",
                                            "updated_at": "2024-03-24T22:42:14+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T04:47:49.412999+00:00"
                                    },
                                    "previous_angle": 1,
                                    "previous_distance": 54
                                }
                            }
                        ]
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_recover_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_recover_records",
                                    "id": "a1c22e95-097f-431b-82a2-d9ac80bcc5e2",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "89d4c2c0-f2b6-43db-b93f-69e5080c33f4",
                                            "title": "젤다의 전설: 야생의 숨결",
                                            "updated_at": "2024-03-24T22:42:14+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:39:05.21357+00:00"
                                    },
                                    "current_angle": 1,
                                    "current_distance": 54
                                }
                            }
                        ]
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "9a0fb843-ad97-408c-9345-ae7634b53ddf",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "1fba50b7-5983-486e-bad2-8260ee0e9dab",
                        "title": "헌터X헌터",
                        "updated_at": "2024-03-24T21:43:33.382+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "d6dd3921-37b2-4150-a0ba-5c75502e3243",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "1fba50b7-5983-486e-bad2-8260ee0e9dab",
                                            "title": "헌터X헌터",
                                            "updated_at": "2024-03-24T21:43:33.382+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 0,
                                    "current_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "9cf23b5f-6b69-42f5-9f83-3e6c9ec44819",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "1fba50b7-5983-486e-bad2-8260ee0e9dab",
                                            "title": "헌터X헌터",
                                            "updated_at": "2024-03-24T21:43:33.382+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:38:48.031667+00:00"
                                    },
                                    "previous_angle": 0,
                                    "previous_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_recover_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_recover_records",
                                    "id": "09b6a603-cf18-4f4e-a87a-732d8ffed098",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "1fba50b7-5983-486e-bad2-8260ee0e9dab",
                                            "title": "헌터X헌터",
                                            "updated_at": "2024-03-24T21:43:33.382+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-03T14:19:40.499677+00:00"
                                    },
                                    "current_angle": 0,
                                    "current_distance": 100
                                }
                            }
                        ]
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "b5636aee-f845-4ec5-99a1-63d0f78e835e",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "f1f558aa-638d-4d7f-b0f6-d4e1490b2fe3",
                        "title": "소설가의 영화",
                        "updated_at": "2024-03-24T23:18:35.319+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_update_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_update_records",
                                    "id": "08be4e2b-67f7-4eb7-8a6e-494c869c2c61",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "f1f558aa-638d-4d7f-b0f6-d4e1490b2fe3",
                                            "title": "소설가의 영화",
                                            "updated_at": "2024-03-24T23:18:35.319+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-27T03:22:02.655647+00:00"
                                    },
                                    "current_angle": 252,
                                    "current_distance": 77,
                                    "previous_angle": 267,
                                    "previous_distance": 58
                                }
                            },
                            {
                                "__typename": "pentagram_revision_update_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_update_records",
                                    "id": "ecc190dd-b295-4b92-821f-4dd9bdd50c67",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "f1f558aa-638d-4d7f-b0f6-d4e1490b2fe3",
                                            "title": "소설가의 영화",
                                            "updated_at": "2024-03-24T23:18:35.319+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T04:47:49.412999+00:00"
                                    },
                                    "current_angle": 283,
                                    "current_distance": 36,
                                    "previous_angle": 252,
                                    "previous_distance": 77
                                }
                            }
                        ]
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "bc9fef22-9993-4951-bf92-6645fef5a47e",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "f1f558aa-638d-4d7f-b0f6-d4e1490b2fe3",
                                            "title": "소설가의 영화",
                                            "updated_at": "2024-03-24T23:18:35.319+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 267,
                                    "current_distance": 58
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "c8e4029e-f492-40c2-9376-36b8cae96296",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "f1f558aa-638d-4d7f-b0f6-d4e1490b2fe3",
                                            "title": "소설가의 영화",
                                            "updated_at": "2024-03-24T23:18:35.319+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-03T14:19:40.499677+00:00"
                                    },
                                    "previous_angle": 283,
                                    "previous_distance": 36
                                }
                            }
                        ]
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": []
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "ec4c7179-7989-473e-9e68-7f72e84f80c4",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "95ec7530-aedc-459e-83b6-9f8e1d392da6",
                        "title": "에듀케이션",
                        "updated_at": "2024-03-24T22:42:51+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_update_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_update_records",
                                    "id": "4ba40616-96c4-4ea7-a62e-c5ce645a4c14",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "95ec7530-aedc-459e-83b6-9f8e1d392da6",
                                            "title": "에듀케이션",
                                            "updated_at": "2024-03-24T22:42:51+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T12:39:13.714174+00:00"
                                    },
                                    "current_angle": 109,
                                    "current_distance": 76,
                                    "previous_angle": 95,
                                    "previous_distance": 38
                                }
                            }
                        ]
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "5dc3ca9a-e42c-4bac-86d2-9bd3ab265e7f",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "95ec7530-aedc-459e-83b6-9f8e1d392da6",
                                            "title": "에듀케이션",
                                            "updated_at": "2024-03-24T22:42:51+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 95,
                                    "current_distance": 38
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "a52706e8-dfe0-4db4-9682-0ab6c6ab7557",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "95ec7530-aedc-459e-83b6-9f8e1d392da6",
                                            "title": "에듀케이션",
                                            "updated_at": "2024-03-24T22:42:51+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T04:47:49.412999+00:00"
                                    },
                                    "previous_angle": 95,
                                    "previous_distance": 38
                                }
                            }
                        ]
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_recover_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_recover_records",
                                    "id": "d949874f-3a2b-474c-826d-7522e7824320",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "95ec7530-aedc-459e-83b6-9f8e1d392da6",
                                            "title": "에듀케이션",
                                            "updated_at": "2024-03-24T22:42:51+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T04:48:29.045688+00:00"
                                    },
                                    "current_angle": 95,
                                    "current_distance": 38
                                }
                            }
                        ]
                    }
                }
            },
            {
                "__typename": "pentagram_nodesEdge",
                "node": {
                    "__typename": "pentagram_nodes",
                    "id": "f50e1c9e-290f-4465-926b-fa49739e0e09",
                    "oeuvres": {
                        "__typename": "oeuvres",
                        "id": "530f8d8a-23bd-40f1-af94-5949985e7f87",
                        "title": "Game I",
                        "updated_at": "2024-03-24T22:38:30+00:00"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "edges": []
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_upsert_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_upsert_records",
                                    "id": "fff0a25f-72d0-4920-bb1a-6c4063d47e20",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "530f8d8a-23bd-40f1-af94-5949985e7f87",
                                            "title": "Game I",
                                            "updated_at": "2024-03-24T22:38:30+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-03-25T21:23:46.334179+00:00"
                                    },
                                    "current_angle": 72,
                                    "current_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_remove_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_remove_records",
                                    "id": "2e436ca8-acdc-47a1-bcfb-f1f6f1c6b370",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "530f8d8a-23bd-40f1-af94-5949985e7f87",
                                            "title": "Game I",
                                            "updated_at": "2024-03-24T22:38:30+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-02T04:47:49.412999+00:00"
                                    },
                                    "previous_angle": 72,
                                    "previous_distance": 100
                                }
                            }
                        ]
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "edges": [
                            {
                                "__typename": "pentagram_revision_recover_recordsEdge",
                                "node": {
                                    "__typename": "pentagram_revision_recover_records",
                                    "id": "672c7716-6ac7-48e3-803d-f46dd67fd822",
                                    "pentagram_nodes": {
                                        "__typename": "pentagram_nodes",
                                        "oeuvres": {
                                            "__typename": "oeuvres",
                                            "id": "530f8d8a-23bd-40f1-af94-5949985e7f87",
                                            "title": "Game I",
                                            "updated_at": "2024-03-24T22:38:30+00:00"
                                        }
                                    },
                                    "pentagram_revisions": {
                                        "__typename": "pentagram_revisions",
                                        "created_at": "2024-04-03T14:19:40.499677+00:00"
                                    },
                                    "current_angle": 72,
                                    "current_distance": 100
                                }
                            }
                        ]
                    }
                }
            }
        ]
    },
    "pentagram_revisionsCollection": {
        "__typename": "pentagram_revisionsConnection",
        "edges": [
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "080dd8be-7fe2-4cea-b5bf-7364475b578c",
                    "created_at": "2024-04-03T14:19:40.499677+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 1
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 2
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 2
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "bb9ad52c-e76d-49da-a9e3-b6e410ec197d",
                    "created_at": "2024-04-02T12:39:13.714174+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 4
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "a7d6d27a-f68c-41c2-916b-e3f157683bc2",
                    "created_at": "2024-04-02T12:39:05.21357+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 2
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "42c8367a-ac2f-42b5-aabd-62257f850f90",
                    "created_at": "2024-04-02T12:38:48.031667+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 1
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "8f833440-86a1-4ac3-a7cf-f5f649cbf221",
                    "created_at": "2024-04-02T12:38:36.256021+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 1
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "ff6108c3-59d3-4db4-9603-683d428a1039",
                    "created_at": "2024-04-02T12:38:26.902253+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 1
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "b019eb15-93a2-4360-8e43-7ab08b825d78",
                    "created_at": "2024-04-02T12:38:20.808803+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 1
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "9a7f3db5-9e8a-4bfc-88db-c7012d753358",
                    "created_at": "2024-04-02T04:48:29.045688+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 1
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "df01f81b-6e43-43ab-af43-580b1318c345",
                    "created_at": "2024-04-02T04:48:04.745094+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 1
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "a17a421c-f1f8-4ed8-87f5-2095ab674eba",
                    "created_at": "2024-04-02T04:47:49.412999+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 2
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 5
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "17e02e43-5536-42c9-b839-e149b963e568",
                    "created_at": "2024-03-31T08:00:39.292941+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 1
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 1
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "ac41d77f-0dd3-4028-9163-77c5e38406e3",
                    "created_at": "2024-03-31T07:59:16.421097+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 1
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "d4c8a5a1-05a2-4854-aabb-3c6a12828fba",
                    "created_at": "2024-03-31T07:59:06.699594+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 1
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "c7009d23-03c7-48c5-a81f-57f13030cf9c",
                    "created_at": "2024-03-27T03:22:02.655647+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 1
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 1
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            },
            {
                "__typename": "pentagram_revisionsEdge",
                "node": {
                    "__typename": "pentagram_revisions",
                    "id": "b546b800-1476-458f-82e4-f9669073f92c",
                    "created_at": "2024-03-25T21:23:46.334179+00:00",
                    "pentagrams": {
                        "__typename": "pentagrams",
                        "id": "0891ebd1-5ea6-4839-9299-678b4bb7aecd"
                    },
                    "pentagram_revision_update_recordsCollection": {
                        "__typename": "pentagram_revision_update_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_upsert_recordsCollection": {
                        "__typename": "pentagram_revision_upsert_recordsConnection",
                        "totalCount": 11
                    },
                    "pentagram_revision_remove_recordsCollection": {
                        "__typename": "pentagram_revision_remove_recordsConnection",
                        "totalCount": 0
                    },
                    "pentagram_revision_recover_recordsCollection": {
                        "__typename": "pentagram_revision_recover_recordsConnection",
                        "totalCount": 0
                    }
                }
            }
        ]
    }
}

export const feedSample: FeedItems = {
    "__typename": "pentagram_revisions",
    "id": "17cdffbe-32c4-47b5-b433-3778a66671c7",
    "created_at": "2024-04-03T12:32:08.089747+00:00",
    "users": {
        "__typename": "users",
        "mutable_id": "kangbism",
        "nickname": "리자몽급카레",
        "id": "fa4b6a5a-fbbf-4830-a9f9-85d5c662fcca",
        "updated_at": "2024-03-24T06:29:08.042+00:00"
    },
    "pentagrams": {
        "__typename": "pentagrams",
        "id": "13d360ff-0a05-43e7-bb56-7df8c863dcb2",
        "description": "",
        "created_at": "2024-03-25T22:59:37.445472+00:00",
        "users": {
            "__typename": "users",
            "mutable_id": "kangbism",
            "nickname": "리자몽급카레",
            "id": "fa4b6a5a-fbbf-4830-a9f9-85d5c662fcca",
            "updated_at": "2024-03-24T06:29:08.042+00:00"
        },
        "pentagram_nodesCollection": {
            "__typename": "pentagram_nodesConnection",
            "edges": [
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "1d144934-8371-44ce-a019-9aa353c7de65",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "ce1619e9-34d7-4cee-b672-579c2be8cc0f",
                            "title": "여름 눈 랑데부",
                            "updated_at": "2024-03-24T21:44:29.488+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "6e418367-e143-4507-bc0c-00354e8133a6",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "ce1619e9-34d7-4cee-b672-579c2be8cc0f",
                                                "title": "여름 눈 랑데부",
                                                "updated_at": "2024-03-24T21:44:29.488+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 0,
                                        "current_distance": 100
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                },
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "578ee621-eb21-449a-bef3-a79a40293aee",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "e3308bdb-548e-4c5c-b06c-87cae4ce154a",
                            "title": "벚꽃만월",
                            "updated_at": "2024-03-24T21:53:19.873+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "d40fd3d7-22dc-4cf1-b50d-b496b93ffe24",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "e3308bdb-548e-4c5c-b06c-87cae4ce154a",
                                                "title": "벚꽃만월",
                                                "updated_at": "2024-03-24T21:53:19.873+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 317,
                                        "current_distance": 81
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                },
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "7f6ff7d0-0cbb-4bb7-b101-4c5cf443eb62",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "21c184ac-e029-4254-ace6-0df3f089bcb9",
                            "title": "팰월드",
                            "updated_at": "2024-03-24T22:01:27.953+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "d20680d2-ab26-4006-87f5-637f9b5465b9",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "21c184ac-e029-4254-ace6-0df3f089bcb9",
                                                "title": "팰월드",
                                                "updated_at": "2024-03-24T22:01:27.953+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 288,
                                        "current_distance": 100
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                },
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "80532efb-f772-4e0d-83bf-c168435ed25b",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "e8df3ecf-c58f-41a7-88c7-3ea030fcf67e",
                            "title": "조 블랙의 사랑",
                            "updated_at": "2024-03-24T21:45:08.529+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "805b3baf-3581-4ef5-83f5-df35bb16baa9",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "e8df3ecf-c58f-41a7-88c7-3ea030fcf67e",
                                                "title": "조 블랙의 사랑",
                                                "updated_at": "2024-03-24T21:45:08.529+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 61,
                                        "current_distance": 30
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                },
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "90afa761-5c4b-4c62-ab4b-d983649ca5fc",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "0a983d61-d355-4899-9256-ec8e94aa4ebe",
                            "title": "좋아 좋아 너무 좋아 정말 사랑해",
                            "updated_at": "2024-03-24T22:06:26.727+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "0ea1d13b-bb97-4abd-a0c0-14c1746b1e93",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "0a983d61-d355-4899-9256-ec8e94aa4ebe",
                                                "title": "좋아 좋아 너무 좋아 정말 사랑해",
                                                "updated_at": "2024-03-24T22:06:26.727+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 139,
                                        "current_distance": 53
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_remove_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_remove_records",
                                        "id": "26668859-f60b-4905-8163-0655576661fe",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "0a983d61-d355-4899-9256-ec8e94aa4ebe",
                                                "title": "좋아 좋아 너무 좋아 정말 사랑해",
                                                "updated_at": "2024-03-24T22:06:26.727+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-04-03T12:32:08.089747+00:00"
                                        },
                                        "previous_angle": 139,
                                        "previous_distance": 53
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                },
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "b635fcc2-8588-49ff-b254-5e07115c7c29",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "1fba50b7-5983-486e-bad2-8260ee0e9dab",
                            "title": "헌터X헌터",
                            "updated_at": "2024-03-24T21:43:33.382+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_update_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_update_records",
                                        "id": "58d1faab-87a8-4d6a-bef1-1039ef0b95d5",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "1fba50b7-5983-486e-bad2-8260ee0e9dab",
                                                "title": "헌터X헌터",
                                                "updated_at": "2024-03-24T21:43:33.382+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-04-03T12:32:08.089747+00:00"
                                        },
                                        "current_angle": 313,
                                        "current_distance": 25,
                                        "previous_angle": 350,
                                        "previous_distance": 58
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "f5df7748-3e9a-4f1e-b5e3-348205708cb4",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "1fba50b7-5983-486e-bad2-8260ee0e9dab",
                                                "title": "헌터X헌터",
                                                "updated_at": "2024-03-24T21:43:33.382+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 350,
                                        "current_distance": 58
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                },
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "c1b64862-4ac9-4dfd-9e6d-45416c2e94b4",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "c8b63387-30d5-4d54-8302-2e23a7ae3186",
                            "title": "안녕, 에리",
                            "updated_at": "2024-03-24T21:57:32.58+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "39fea5d5-1e85-43d5-bd91-820dca48fe28",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "c8b63387-30d5-4d54-8302-2e23a7ae3186",
                                                "title": "안녕, 에리",
                                                "updated_at": "2024-03-24T21:57:32.58+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 41,
                                        "current_distance": 64
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                },
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "c6eb9417-cd41-4317-9227-cdb53fa07caf",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "e369890c-aa00-4218-a741-7811c3b69a94",
                            "title": "우리의 사람들",
                            "updated_at": "2024-03-24T22:09:47.242+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "916351d4-b2c9-46dd-aa06-9c293cce1786",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "e369890c-aa00-4218-a741-7811c3b69a94",
                                                "title": "우리의 사람들",
                                                "updated_at": "2024-03-24T22:09:47.242+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 177,
                                        "current_distance": 62
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                },
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "e84f890b-a276-4ae2-aa33-a3c1e15c3136",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "43ba4ee3-a53e-4965-93cf-14bb97a070ff",
                            "title": "죽음에 이르는 계절",
                            "updated_at": "2024-03-24T22:20:03.187+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "8c8897b0-c454-4738-8641-b9791ca5457a",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "43ba4ee3-a53e-4965-93cf-14bb97a070ff",
                                                "title": "죽음에 이르는 계절",
                                                "updated_at": "2024-03-24T22:20:03.187+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 72,
                                        "current_distance": 100
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_remove_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_remove_records",
                                        "id": "5e4fc54b-644d-4880-b1c0-5e36800ba658",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "43ba4ee3-a53e-4965-93cf-14bb97a070ff",
                                                "title": "죽음에 이르는 계절",
                                                "updated_at": "2024-03-24T22:20:03.187+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-04-03T12:32:08.089747+00:00"
                                        },
                                        "previous_angle": 72,
                                        "previous_distance": 100
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                },
                {
                    "__typename": "pentagram_nodesEdge",
                    "node": {
                        "__typename": "pentagram_nodes",
                        "id": "f9c120f4-9bad-43d2-ab48-41080347df5c",
                        "oeuvres": {
                            "__typename": "oeuvres",
                            "id": "7ab44056-35b4-472e-bcf6-c877e8878324",
                            "title": "판타스틱 소녀백서",
                            "updated_at": "2024-03-24T22:11:44+00:00"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "edges": [
                                {
                                    "__typename": "pentagram_revision_upsert_recordsEdge",
                                    "node": {
                                        "__typename": "pentagram_revision_upsert_records",
                                        "id": "0c39169a-98a0-49d9-94e6-ac3493fc7a58",
                                        "pentagram_nodes": {
                                            "__typename": "pentagram_nodes",
                                            "oeuvres": {
                                                "__typename": "oeuvres",
                                                "id": "7ab44056-35b4-472e-bcf6-c877e8878324",
                                                "title": "판타스틱 소녀백서",
                                                "updated_at": "2024-03-24T22:11:44+00:00"
                                            }
                                        },
                                        "pentagram_revisions": {
                                            "__typename": "pentagram_revisions",
                                            "created_at": "2024-03-25T22:59:37.445472+00:00"
                                        },
                                        "current_angle": 73,
                                        "current_distance": 65
                                    }
                                }
                            ]
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "edges": []
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "edges": []
                        }
                    }
                }
            ]
        },
        "pentagram_revisionsCollection": {
            "__typename": "pentagram_revisionsConnection",
            "edges": [
                {
                    "__typename": "pentagram_revisionsEdge",
                    "node": {
                        "__typename": "pentagram_revisions",
                        "id": "17cdffbe-32c4-47b5-b433-3778a66671c7",
                        "created_at": "2024-04-03T12:32:08.089747+00:00",
                        "pentagrams": {
                            "__typename": "pentagrams",
                            "id": "13d360ff-0a05-43e7-bb56-7df8c863dcb2"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "totalCount": 1
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "totalCount": 0
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "totalCount": 2
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "totalCount": 0
                        }
                    }
                },
                {
                    "__typename": "pentagram_revisionsEdge",
                    "node": {
                        "__typename": "pentagram_revisions",
                        "id": "607acdd4-45a0-413a-af8a-7f3fe3e0556e",
                        "created_at": "2024-03-25T22:59:37.445472+00:00",
                        "pentagrams": {
                            "__typename": "pentagrams",
                            "id": "13d360ff-0a05-43e7-bb56-7df8c863dcb2"
                        },
                        "pentagram_revision_update_recordsCollection": {
                            "__typename": "pentagram_revision_update_recordsConnection",
                            "totalCount": 0
                        },
                        "pentagram_revision_upsert_recordsCollection": {
                            "__typename": "pentagram_revision_upsert_recordsConnection",
                            "totalCount": 10
                        },
                        "pentagram_revision_remove_recordsCollection": {
                            "__typename": "pentagram_revision_remove_recordsConnection",
                            "totalCount": 0
                        },
                        "pentagram_revision_recover_recordsCollection": {
                            "__typename": "pentagram_revision_recover_recordsConnection",
                            "totalCount": 0
                        }
                    }
                }
            ]
        }
    }
}