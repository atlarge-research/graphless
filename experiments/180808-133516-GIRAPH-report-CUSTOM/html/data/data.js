var data = {
  "id": "b520859",
  "specification": "1.0.0",
  "description": "",
  "system": {
    "platform": {
      "name": "Giraph",
      "acronym": "giraph",
      "version": "1.2.0",
      "link": "https://github.com/apache/giraph"
    },
    "environment": {
      "name": "",
      "acronym": "",
      "version": "",
      "link": "",
      "machines": [
        {
          "quantity": "",
          "cpu": "",
          "memory": "",
          "network": "",
          "storage": ""
        }
      ]
    },
    "tool": {
      "graphalytics-core": {
        "name": "graphalytics-core",
        "version": "1.0.0",
        "link": "https://github.com/ldbc/ldbc_graphalytics"
      },
      "graphalytics-platforms-giraph": {
        "name": "graphalytics-platforms-giraph",
        "version": "0.2-SNAPSHOT",
        "link": "https://github.com/atlarge-research/graphalytics-platforms-giraph"
      }
    },
    "pricing": ""
  },
  "benchmark": {
    "type": "custom",
    "name": "Custom Benchmark",
    "duration": "6698707",
    "timeout": "3600",
    "resources": {},
    "output": {
      "required": "-",
      "directory": "./output/"
    },
    "validation": {
      "required": "-",
      "directory": "/home/hduser/graphalytics-datasets"
    },
    "configurations": {
      "graph.datagen-8_9-fb.edge-properties.types": "real",
      "environment.machine.memory": "",
      "graph.datagen-8_3-zf.cdlp.max-iterations": "10",
      "graph.datagen-9_4-fb.sssp.weight-property": "weight",
      "graph.datagen-8_9-fb.sssp.source-vertex": "6",
      "graph.graph500-24.edge-file": "graph500-24.e",
      "graph.datagen-8_4-fb.vertex-file": "datagen-8_4-fb.v",
      "graph.datagen-9_1-fb.meta.vertices": "16087483",
      "graph.example-undirected.meta.vertices": "9",
      "graph.com-friendster.cdlp.max-iterations": "10",
      "graph.datagen-7_9-fb.vertex-file": "datagen-7_9-fb.v",
      "environment.machine.storage": "",
      "graph.datagen-8_7-zf.bfs.source-vertex": "6",
      "benchmark.runner.max-memory": "",
      "graph.datagen-8_3-zf.meta.vertices": "53525014",
      "graph.datagen-8_1-fb.algorithms": "bfs",
      "graph.datagen-7_7-zf.meta.edges": "32791267",
      "graph.datagen-8_7-zf.vertex-file": "datagen-8_7-zf.v",
      "graph.datagen-8_8-zf.meta.vertices": "168308893",
      "graph.datagen-9_2-zf.vertex-file": "datagen-9_2-zf.v",
      "graph.dota-league.cdlp.max-iterations": "10",
      "graph.datagen-8_5-fb.sssp.source-vertex": "6",
      "graph.datagen-8_8-zf.edge-properties.types": "real",
      "graph.graph500-22.cdlp.max-iterations": "10",
      "graph.graph500-23.algorithms": "bfs",
      "graph.graph500-22.edge-file": "graph500-22.e",
      "graph.datagen-8_0-fb.edge-properties.names": "weight",
      "graph.datagen-8_0-fb.meta.vertices": "1706561",
      "graph.example-undirected.edge-properties.names": "weight",
      "graph.datagen-8_0-fb.algorithms": "bfs",
      "graph.datagen-9_4-fb.edge-properties.types": "real",
      "graph.datagen-7_7-zf.algorithms": "bfs",
      "graph.datagen-8_0-fb.bfs.source-vertex": "6",
      "graph.twitter_mpi.cdlp.max-iterations": "10",
      "graph.graph500-22.bfs.source-vertex": "248533",
      "graph.example-directed.bfs.source-vertex": "1",
      "graph.datagen-9_1-fb.edge-properties.types": "real",
      "graph.datagen-8_5-fb.vertex-file": "datagen-8_5-fb.v",
      "graph.datagen-8_9-fb.cdlp.max-iterations": "10",
      "graph.com-friendster.meta.edges": "1806067135",
      "graph.graph500-26.meta.vertices": "32804978",
      "graph.datagen-7_8-zf.algorithms": "bfs",
      "platform.giraph.zoo-keeper-address": "graphalytics-giraph:2181",
      "graph.datagen-9_2-zf.sssp.weight-property": "weight",
      "graph.datagen-9_2-zf.sssp.source-vertex": "6",
      "graph.datagen-7_5-fb.algorithms": "bfs",
      "graph.graph500-24.bfs.source-vertex": "2592222",
      "graph.datagen-7_6-fb.edge-file": "datagen-7_6-fb.e",
      "graph.datagen-8_8-zf.bfs.source-vertex": "6",
      "graph.dota-league.meta.vertices": "61170",
      "graph.datagen-7_7-zf.meta.vertices": "13180508",
      "graph.datagen-7_5-fb.meta.edges": "34185747",
      "graph.example-directed.edge-properties.types": "real",
      "graph.datagen-7_8-zf.edge-file": "datagen-7_8-zf.e",
      "graph.datagen-9_2-zf.pr.damping-factor": "0.85",
      "graph.datagen-9_3-zf.pr.num-iterations": "10",
      "graph.datagen-9_3-zf.edge-properties.types": "real",
      "graph.datagen-7_5-fb.edge-properties.names": "weight",
      "platform.giraph.job.heap-size": "53248",
      "graph.datagen-8_2-zf.bfs.source-vertex": "6",
      "graph.twitter_mpi.meta.edges": "1963263508",
      "graph.datagen-7_7-zf.edge-properties.names": "weight",
      "graph.dota-league.edge-properties.types": "real",
      "graph.datagen-9_4-fb.edge-properties.names": "weight",
      "graph.datagen-9_3-zf.vertex-file": "datagen-9_3-zf.v",
      "graph.datagen-7_9-fb.edge-properties.names": "weight",
      "graph.datagen-8_9-fb.sssp.weight-property": "weight",
      "graph.datagen-8_2-zf.sssp.source-vertex": "6",
      "graph.graph500-26.cdlp.max-iterations": "10",
      "graph.graph500-26.bfs.source-vertex": "62455266",
      "graph.datagen-9_4-fb.meta.vertices": "29310565",
      "platform.giraph.job.memory-size": "57344",
      "graph.datagen-8_4-fb.sssp.weight-property": "weight",
      "graph.datagen-8_1-fb.meta.edges": "134267822",
      "graph.example-undirected.sssp.source-vertex": "2",
      "graph.twitter_mpi.algorithms": "bfs",
      "graph.datagen-7_5-fb.directed": "false",
      "graph.graph500-25.directed": "false",
      "graph.datagen-9_1-fb.pr.num-iterations": "10",
      "graph.datagen-7_9-fb.edge-file": "datagen-7_9-fb.e",
      "graph.datagen-8_4-fb.bfs.source-vertex": "6",
      "graphs.cache-directory": "./cache",
      "graph.dota-league.pr.damping-factor": "0.85",
      "graph.datagen-9_3-zf.edge-properties.names": "weight",
      "graph.twitter_mpi.edge-file": "twitter_mpi.e",
      "graph.datagen-7_5-fb.edge-properties.types": "real",
      "graph.datagen-8_5-fb.directed": "false",
      "graph.datagen-8_9-fb.directed": "false",
      "graph.datagen-8_5-fb.cdlp.max-iterations": "10",
      "graph.datagen-7_6-fb.meta.edges": "42162988",
      "graph.datagen-8_2-zf.pr.num-iterations": "10",
      "graph.datagen-8_0-fb.meta.edges": "107507376",
      "graph.datagen-9_0-fb.vertex-file": "datagen-9_0-fb.v",
      "graph.graph500-23.bfs.source-vertex": "7348998",
      "graph.datagen-9_1-fb.sssp.source-vertex": "6",
      "graph.datagen-8_4-fb.edge-file": "datagen-8_4-fb.e",
      "graph.datagen-9_0-fb.pr.damping-factor": "0.85",
      "graph.datagen-8_6-fb.vertex-file": "datagen-8_6-fb.v",
      "graph.datagen-8_1-fb.directed": "false",
      "graph.example-undirected.directed": "false",
      "graph.datagen-7_9-fb.directed": "false",
      "platform.acronym": "giraph",
      "graph.datagen-7_5-fb.edge-file": "datagen-7_5-fb.e",
      "graph.com-friendster.edge-file": "com-friendster.e",
      "graph.dota-league.sssp.weight-property": "weight",
      "graph.datagen-7_9-fb.meta.vertices": "1387587",
      "graph.datagen-8_1-fb.edge-properties.names": "weight",
      "graph.graph500-25.vertex-file": "graph500-25.v",
      "graph.datagen-8_2-zf.algorithms": "bfs",
      "graph.com-friendster.pr.damping-factor": "0.85",
      "graph.datagen-9_1-fb.directed": "false",
      "graph.datagen-9_3-zf.meta.edges": "1309998551",
      "graph.example-undirected.bfs.source-vertex": "2",
      "graph.datagen-7_6-fb.pr.damping-factor": "0.85",
      "environment.machine.cpu": "",
      "graph.datagen-7_7-zf.sssp.weight-property": "weight",
      "environment.acronym": "",
      "graph.dota-league.meta.edges": "50870313",
      "graph.datagen-8_1-fb.vertex-file": "datagen-8_1-fb.v",
      "graph.datagen-8_7-zf.pr.num-iterations": "10",
      "graph.datagen-9_0-fb.meta.edges": "1049527225",
      "graph.datagen-7_8-zf.meta.vertices": "16521886",
      "graph.example-undirected.edge-file": "example-undirected.e",
      "graph.datagen-8_8-zf.edge-file": "datagen-8_8-zf.e",
      "graph.graph500-24.vertex-file": "graph500-24.v",
      "graph.datagen-7_6-fb.algorithms": "bfs",
      "graph.graph500-25.meta.vertices": "17062472",
      "graph.datagen-7_8-zf.directed": "false",
      "graph.datagen-9_3-zf.sssp.weight-property": "weight",
      "graph.datagen-8_5-fb.bfs.source-vertex": "6",
      "graph.example-directed.vertex-file": "example-directed.v",
      "graph.datagen-8_3-zf.directed": "false",
      "graph.example-directed.algorithms": "bfs",
      "graph.datagen-7_6-fb.edge-properties.names": "weight",
      "graph.datagen-8_1-fb.cdlp.max-iterations": "10",
      "graph.datagen-8_9-fb.edge-properties.names": "weight",
      "graph.example-undirected.meta.edges": "12",
      "graph.datagen-8_8-zf.directed": "false",
      "graph.datagen-8_9-fb.algorithms": "bfs",
      "graph.graph500-23.pr.damping-factor": "0.85",
      "graph.datagen-8_7-zf.directed": "false",
      "graph.datagen-8_0-fb.vertex-file": "datagen-8_0-fb.v",
      "graph.graph500-24.meta.vertices": "8870942",
      "graph.datagen-8_6-fb.edge-properties.names": "weight",
      "platform.hadoop.home": "/usr/local/hadoop/",
      "benchmark.runner.port": "8012",
      "graph.datagen-7_9-fb.pr.damping-factor": "0.85",
      "graph.datagen-8_8-zf.sssp.weight-property": "weight",
      "graph.datagen-9_0-fb.edge-properties.types": "real",
      "platform.hadoop.hdfs.directory": "graphalytics",
      "graph.datagen-8_3-zf.algorithms": "bfs",
      "graph.datagen-7_5-fb.sssp.source-vertex": "6",
      "graph.com-friendster.directed": "false",
      "graph.datagen-9_2-zf.meta.edges": "1042340732",
      "graph.datagen-7_7-zf.directed": "false",
      "graph.datagen-8_0-fb.sssp.weight-property": "weight",
      "benchmark.description": "",
      "graph.datagen-8_3-zf.vertex-file": "datagen-8_3-zf.v",
      "graph.graph500-22.algorithms": "bfs",
      "graph.graph500-23.pr.num-iterations": "10",
      "benchmark.custom.validation-required": "false",
      "graph.datagen-8_1-fb.sssp.source-vertex": "6",
      "graph.datagen-9_0-fb.meta.vertices": "12857671",
      "graph.datagen-8_2-zf.sssp.weight-property": "weight",
      "graph.datagen-7_7-zf.vertex-file": "datagen-7_7-zf.v",
      "graph.datagen-8_5-fb.meta.vertices": "4599739",
      "graph.graph500-24.pr.damping-factor": "0.85",
      "graph.datagen-8_0-fb.sssp.source-vertex": "6",
      "graph.datagen-9_1-fb.edge-properties.names": "weight",
      "graph.datagen-8_8-zf.algorithms": "bfs",
      "benchmark.custom.graphs": "example-directed",
      "graph.datagen-8_9-fb.edge-file": "datagen-8_9-fb.e",
      "graph.datagen-8_7-zf.cdlp.max-iterations": "10",
      "graph.example-directed.sssp.source-vertex": "1",
      "graph.datagen-9_4-fb.pr.damping-factor": "0.85",
      "graph.datagen-9_2-zf.edge-properties.names": "weight",
      "environment.machine.network": "",
      "graph.twitter_mpi.vertex-file": "twitter_mpi.v",
      "graph.datagen-8_1-fb.bfs.source-vertex": "6",
      "graph.datagen-9_3-zf.pr.damping-factor": "0.85",
      "graph.datagen-8_1-fb.pr.num-iterations": "10",
      "graph.datagen-8_2-zf.pr.damping-factor": "0.85",
      "graph.graph500-26.edge-file": "graph500-26.e",
      "graph.datagen-9_1-fb.meta.edges": "1342158397",
      "graph.datagen-9_3-zf.directed": "false",
      "graph.datagen-8_3-zf.pr.num-iterations": "10",
      "graph.datagen-7_8-zf.pr.damping-factor": "0.85",
      "graph.graph500-25.algorithms": "bfs",
      "graph.datagen-8_3-zf.bfs.source-vertex": "6",
      "graph.datagen-9_1-fb.sssp.weight-property": "weight",
      "graph.graph500-23.meta.vertices": "4610222",
      "graph.graph500-26.directed": "false",
      "graph.datagen-8_0-fb.edge-properties.types": "real",
      "environment.link": "",
      "graph.dota-league.pr.num-iterations": "10",
      "graph.datagen-7_8-zf.meta.edges": "41025255",
      "graph.datagen-9_4-fb.meta.edges": "2588948669",
      "graph.datagen-8_4-fb.cdlp.max-iterations": "10",
      "graph.datagen-7_6-fb.directed": "false",
      "platform.link": "https://github.com/apache/giraph",
      "graph.datagen-9_1-fb.pr.damping-factor": "0.85",
      "benchmark.executor.port": "8011",
      "graph.datagen-8_0-fb.pr.damping-factor": "0.85",
      "graph.graph500-22.pr.num-iterations": "10",
      "graph.datagen-8_2-zf.edge-file": "datagen-8_2-zf.e",
      "graph.datagen-8_4-fb.edge-properties.types": "real",
      "graph.datagen-8_6-fb.directed": "false",
      "graph.example-directed.cdlp.max-iterations": "2",
      "graph.datagen-9_1-fb.edge-file": "datagen-9_1-fb.e",
      "benchmark.custom.output-required": "true",
      "graph.graph500-23.meta.edges": "129333677",
      "graph.datagen-8_2-zf.edge-properties.names": "weight",
      "graph.com-friendster.algorithms": "bfs",
      "graph.graph500-23.directed": "false",
      "graph.datagen-8_7-zf.algorithms": "bfs",
      "graph.datagen-7_6-fb.sssp.source-vertex": "6",
      "graph.datagen-8_8-zf.sssp.source-vertex": "6",
      "graph.datagen-8_4-fb.meta.vertices": "3809084",
      "graph.datagen-7_6-fb.bfs.source-vertex": "6",
      "graph.datagen-8_3-zf.edge-file": "datagen-8_3-zf.e",
      "graph.graph500-22.meta.vertices": "2396657",
      "graph.com-friendster.bfs.source-vertex": "101",
      "graph.datagen-7_9-fb.meta.edges": "85670523",
      "environment.machine.quantity": "",
      "graph.datagen-7_5-fb.sssp.weight-property": "weight",
      "graph.graph500-24.algorithms": "bfs",
      "graph.example-undirected.pr.num-iterations": "2",
      "graphs.validation-directory": "/home/hduser/graphalytics-datasets",
      "graph.example-directed.sssp.weight-property": "weight",
      "graph.datagen-8_1-fb.sssp.weight-property": "weight",
      "graph.datagen-8_6-fb.algorithms": "bfs",
      "graph.datagen-8_7-zf.edge-properties.names": "weight",
      "graph.datagen-8_9-fb.pr.num-iterations": "10",
      "graph.datagen-8_0-fb.cdlp.max-iterations": "10",
      "graph.datagen-8_1-fb.edge-properties.types": "real",
      "graph.graph500-23.edge-file": "graph500-23.e",
      "graph.datagen-8_7-zf.meta.vertices": "145050709",
      "graph.datagen-8_6-fb.meta.edges": "421988619",
      "graph.datagen-8_9-fb.meta.vertices": "10572901",
      "graph.datagen-8_9-fb.pr.damping-factor": "0.85",
      "graph.dota-league.bfs.source-vertex": "287770",
      "graph.datagen-7_6-fb.meta.vertices": "754147",
      "graph.datagen-7_9-fb.cdlp.max-iterations": "10",
      "graph.datagen-8_5-fb.meta.edges": "332026902",
      "graph.datagen-8_6-fb.sssp.weight-property": "weight",
      "benchmark.name": "Custom Benchmark",
      "graph.datagen-7_7-zf.sssp.source-vertex": "6",
      "graph.datagen-8_4-fb.pr.num-iterations": "10",
      "graph.datagen-8_5-fb.edge-properties.names": "weight",
      "benchmark.custom.timeout": "3600",
      "graph.datagen-7_5-fb.bfs.source-vertex": "6",
      "graph.datagen-9_0-fb.edge-file": "datagen-9_0-fb.e",
      "graph.datagen-8_1-fb.edge-file": "datagen-8_1-fb.e",
      "graph.datagen-8_8-zf.meta.edges": "413354288",
      "graph.datagen-7_8-zf.sssp.weight-property": "weight",
      "graph.datagen-9_1-fb.cdlp.max-iterations": "10",
      "graph.graph500-24.cdlp.max-iterations": "10",
      "graph.graph500-25.pr.damping-factor": "0.85",
      "graph.example-undirected.pr.damping-factor": "0.85",
      "platform.name": "Giraph",
      "platform.giraph.job.worker-count": "13",
      "graph.datagen-9_2-zf.bfs.source-vertex": "6",
      "graph.graph500-25.edge-file": "graph500-25.e",
      "graph.datagen-8_3-zf.edge-properties.types": "real",
      "graph.datagen-9_4-fb.sssp.source-vertex": "6",
      "graph.datagen-8_2-zf.meta.vertices": "43734497",
      "graph.datagen-8_2-zf.vertex-file": "datagen-8_2-zf.v",
      "graph.graph500-26.meta.edges": "1051922853",
      "graph.graph500-25.cdlp.max-iterations": "10",
      "graph.datagen-9_4-fb.cdlp.max-iterations": "10",
      "graph.datagen-9_1-fb.algorithms": "bfs",
      "graph.datagen-8_9-fb.vertex-file": "datagen-8_9-fb.v",
      "benchmark.custom.algorithms": "BFS",
      "graph.datagen-9_3-zf.bfs.source-vertex": "6",
      "graph.datagen-9_4-fb.vertex-file": "datagen-9_4-fb.v",
      "graph.datagen-9_2-zf.directed": "false",
      "graph.datagen-9_2-zf.edge-file": "datagen-9_2-zf.e",
      "graph.datagen-9_3-zf.edge-file": "datagen-9_3-zf.e",
      "graph.example-directed.directed": "true",
      "graph.datagen-8_1-fb.pr.damping-factor": "0.85",
      "graph.datagen-9_2-zf.cdlp.max-iterations": "10",
      "graph.graph500-26.algorithms": "bfs",
      "graph.datagen-7_9-fb.edge-properties.types": "real",
      "graph.datagen-8_5-fb.algorithms": "bfs",
      "environment.name": "",
      "graph.datagen-8_3-zf.sssp.source-vertex": "6",
      "graphs.output-directory": "./output/",
      "graph.datagen-8_4-fb.pr.damping-factor": "0.85",
      "graph.example-directed.meta.edges": "17",
      "graph.datagen-8_5-fb.pr.num-iterations": "10",
      "graph.example-undirected.sssp.weight-property": "weight",
      "graph.example-directed.pr.num-iterations": "2",
      "graph.datagen-7_6-fb.cdlp.max-iterations": "10",
      "graph.graph500-22.pr.damping-factor": "0.85",
      "graph.datagen-8_0-fb.pr.num-iterations": "10",
      "graph.graph500-22.meta.edges": "64155735",
      "graph.datagen-9_2-zf.meta.vertices": "434943376",
      "graph.datagen-7_7-zf.pr.damping-factor": "0.85",
      "graph.datagen-7_8-zf.edge-properties.types": "real",
      "graph.datagen-8_4-fb.algorithms": "bfs",
      "graph.datagen-8_8-zf.pr.damping-factor": "0.85",
      "graph.datagen-7_8-zf.sssp.source-vertex": "6",
      "graph.datagen-7_5-fb.vertex-file": "datagen-7_5-fb.v",
      "graph.datagen-8_1-fb.meta.vertices": "2072117",
      "graph.datagen-7_9-fb.sssp.weight-property": "weight",
      "graph.dota-league.directed": "false",
      "graph.twitter_mpi.bfs.source-vertex": "420",
      "graph.datagen-8_6-fb.sssp.source-vertex": "6",
      "graph.datagen-7_7-zf.cdlp.max-iterations": "10",
      "graph.datagen-8_9-fb.bfs.source-vertex": "6",
      "graph.datagen-9_0-fb.edge-properties.names": "weight",
      "graph.graph500-24.pr.num-iterations": "10",
      "graph.graph500-24.meta.edges": "260379520",
      "graph.graph500-26.pr.damping-factor": "0.85",
      "graph.datagen-8_3-zf.edge-properties.names": "weight",
      "graph.datagen-7_8-zf.pr.num-iterations": "10",
      "graph.datagen-7_9-fb.algorithms": "bfs",
      "graph.datagen-8_6-fb.pr.damping-factor": "0.85",
      "graph.datagen-8_8-zf.cdlp.max-iterations": "10",
      "graph.datagen-7_6-fb.pr.num-iterations": "10",
      "graph.datagen-7_8-zf.vertex-file": "datagen-7_8-zf.v",
      "graph.datagen-7_5-fb.pr.damping-factor": "0.85",
      "graph.datagen-8_0-fb.edge-file": "datagen-8_0-fb.e",
      "graph.datagen-8_7-zf.edge-properties.types": "real",
      "graph.datagen-8_6-fb.cdlp.max-iterations": "10",
      "graph.dota-league.edge-file": "dota-league.e",
      "graph.graph500-26.vertex-file": "graph500-26.v",
      "benchmark.type": "custom",
      "graph.datagen-9_0-fb.algorithms": "bfs",
      "graph.datagen-8_7-zf.sssp.source-vertex": "6",
      "graph.graph500-24.directed": "false",
      "graph.datagen-8_6-fb.meta.vertices": "5667674",
      "graph.datagen-8_5-fb.edge-properties.types": "real",
      "graph.datagen-9_4-fb.directed": "false",
      "graph.example-directed.edge-file": "example-directed.e",
      "graph.datagen-7_5-fb.pr.num-iterations": "10",
      "graph.datagen-7_6-fb.vertex-file": "datagen-7_6-fb.v",
      "graph.datagen-8_2-zf.cdlp.max-iterations": "10",
      "graph.datagen-9_0-fb.cdlp.max-iterations": "10",
      "graph.datagen-8_7-zf.edge-file": "datagen-8_7-zf.e",
      "graph.dota-league.sssp.source-vertex": "287770",
      "graph.datagen-9_2-zf.edge-properties.types": "real",
      "graph.graph500-23.vertex-file": "graph500-23.v",
      "graph.graph500-22.vertex-file": "graph500-22.v",
      "graph.datagen-7_9-fb.sssp.source-vertex": "6",
      "graph.datagen-7_7-zf.bfs.source-vertex": "6",
      "graph.datagen-9_0-fb.sssp.source-vertex": "6",
      "graph.datagen-9_1-fb.bfs.source-vertex": "6",
      "graph.datagen-8_3-zf.pr.damping-factor": "0.85",
      "graphs.names": "[dota-league, com-friendster, twitter_mpi, graph500-22, graph500-23, graph500-24, graph500-25, graph500-26, datagen-7_5-fb, datagen-7_6-fb, datagen-7_7-zf, datagen-7_8-zf, datagen-7_9-fb, datagen-8_0-fb, datagen-8_1-fb, datagen-8_2-zf, datagen-8_3-zf, datagen-8_4-fb, datagen-8_5-fb, datagen-8_6-fb, datagen-8_7-zf, datagen-8_8-zf, datagen-8_9-fb, datagen-9_0-fb, datagen-9_1-fb, datagen-9_2-zf, datagen-9_3-zf, datagen-9_4-fb, example-directed, example-undirected]",
      "graph.twitter_mpi.pr.damping-factor": "0.85",
      "graph.datagen-8_2-zf.directed": "false",
      "graph.datagen-9_0-fb.sssp.weight-property": "weight",
      "graph.datagen-7_9-fb.pr.num-iterations": "10",
      "graph.datagen-9_3-zf.cdlp.max-iterations": "10",
      "graph.datagen-7_6-fb.sssp.weight-property": "weight",
      "graph.datagen-8_3-zf.sssp.weight-property": "weight",
      "graph.dota-league.edge-properties.names": "weight",
      "graph.datagen-8_7-zf.meta.edges": "340157363",
      "graph.datagen-7_8-zf.bfs.source-vertex": "6",
      "graph.com-friendster.meta.vertices": "65608366",
      "graph.graph500-22.directed": "false",
      "graph.graph500-23.cdlp.max-iterations": "10",
      "graph.datagen-8_6-fb.bfs.source-vertex": "6",
      "graph.datagen-9_4-fb.edge-file": "datagen-9_4-fb.e",
      "graph.com-friendster.pr.num-iterations": "10",
      "graph.twitter_mpi.pr.num-iterations": "10",
      "graph.datagen-7_8-zf.edge-properties.names": "weight",
      "graph.datagen-8_2-zf.edge-properties.types": "real",
      "graph.datagen-9_0-fb.bfs.source-vertex": "6",
      "graph.datagen-8_4-fb.edge-properties.names": "weight",
      "graph.datagen-8_5-fb.edge-file": "datagen-8_5-fb.e",
      "graph.datagen-8_5-fb.sssp.weight-property": "weight",
      "graph.example-directed.edge-properties.names": "weight",
      "graph.datagen-9_1-fb.vertex-file": "datagen-9_1-fb.v",
      "graph.datagen-8_4-fb.meta.edges": "269479177",
      "graph.datagen-9_4-fb.pr.num-iterations": "10",
      "graph.graph500-25.bfs.source-vertex": "24460635",
      "graph.example-undirected.cdlp.max-iterations": "2",
      "graph.datagen-7_7-zf.edge-properties.types": "real",
      "graph.datagen-9_2-zf.pr.num-iterations": "10",
      "graph.datagen-8_7-zf.sssp.weight-property": "weight",
      "graph.graph500-25.pr.num-iterations": "10",
      "graph.datagen-9_4-fb.algorithms": "bfs",
      "platform.version": "1.2.0",
      "platform.giraph.job.worker-cores": "16",
      "graph.datagen-8_8-zf.vertex-file": "datagen-8_8-zf.v",
      "graph.example-undirected.vertex-file": "example-undirected.v",
      "graph.datagen-8_4-fb.sssp.source-vertex": "6",
      "graph.datagen-8_8-zf.edge-properties.names": "weight",
      "graph.example-undirected.edge-properties.types": "real",
      "graph.graph500-26.pr.num-iterations": "10",
      "platform.giraph.options.preferIP": "false",
      "graph.dota-league.vertex-file": "dota-league.v",
      "graph.datagen-7_7-zf.edge-file": "datagen-7_7-zf.e",
      "graph.datagen-9_3-zf.meta.vertices": "555270053",
      "graph.datagen-9_3-zf.algorithms": "bfs",
      "graph.twitter_mpi.directed": "true",
      "system.pricing": "",
      "graph.example-undirected.algorithms": "bfs",
      "graph.datagen-8_2-zf.meta.edges": "106440188",
      "graph.datagen-8_5-fb.pr.damping-factor": "0.85",
      "graph.dota-league.algorithms": "bfs",
      "graph.datagen-8_6-fb.edge-file": "datagen-8_6-fb.e",
      "graph.datagen-8_6-fb.edge-properties.types": "real",
      "graphs.root-directory": "/home/hduser/graphalytics-datasets",
      "graph.datagen-7_7-zf.pr.num-iterations": "10",
      "graph.com-friendster.vertex-file": "com-friendster.v",
      "graph.graph500-25.meta.edges": "523602831",
      "graph.datagen-7_5-fb.meta.vertices": "633432",
      "graph.twitter_mpi.meta.vertices": "52579678",
      "graph.datagen-8_6-fb.pr.num-iterations": "10",
      "graph.datagen-7_5-fb.cdlp.max-iterations": "10",
      "graph.datagen-9_2-zf.algorithms": "bfs",
      "graph.datagen-7_6-fb.edge-properties.types": "real",
      "graph.datagen-9_0-fb.pr.num-iterations": "10",
      "graph.datagen-8_3-zf.meta.edges": "130579909",
      "graph.datagen-8_7-zf.pr.damping-factor": "0.85",
      "graph.datagen-8_8-zf.pr.num-iterations": "10",
      "graph.example-directed.pr.damping-factor": "0.85",
      "graph.datagen-8_0-fb.directed": "false",
      "graph.datagen-8_9-fb.meta.edges": "848681908",
      "graph.datagen-9_0-fb.directed": "false",
      "graph.datagen-7_9-fb.bfs.source-vertex": "6",
      "graph.datagen-7_8-zf.cdlp.max-iterations": "10",
      "environment.version": "",
      "graph.datagen-9_4-fb.bfs.source-vertex": "6",
      "graph.datagen-9_3-zf.sssp.source-vertex": "6",
      "graph.example-directed.meta.vertices": "10",
      "graph.datagen-8_4-fb.directed": "false"
    }
  },
  "result": {
    "experiments": {
      "e705132": {
        "id": "e705132",
        "type": "custom:exp",
        "jobs": [
          "j573674",
          "j743661",
          "j567630",
          "j640808",
          "j472096",
          "j729679",
          "j817829",
          "j624358",
          "j650139",
          "j475727",
          "j477996",
          "j867173",
          "j556469",
          "j564493",
          "j639952",
          "j468841",
          "j802417",
          "j676163",
          "j492145",
          "j887037",
          "j497799",
          "j845191",
          "j824407",
          "j561506",
          "j863126",
          "j546796",
          "j629505",
          "j543454",
          "j832905",
          "j886291",
          "j575599",
          "j767924",
          "j716690",
          "j572572",
          "j645507",
          "j900244",
          "j809919",
          "j556349",
          "j598452",
          "j468704",
          "j607131"
        ]
      }
    },
    "jobs": {
      "j556469": {
        "id": "j556469",
        "algorithm": "BFS",
        "dataset": "example-undirected",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r726729"
        ]
      },
      "j845191": {
        "id": "j845191",
        "algorithm": "LCC",
        "dataset": "datagen-8_4-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r656497"
        ]
      },
      "j556349": {
        "id": "j556349",
        "algorithm": "WCC",
        "dataset": "datagen-8_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r554494"
        ]
      },
      "j743661": {
        "id": "j743661",
        "algorithm": "SSSP",
        "dataset": "datagen-8_4-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r832055"
        ]
      },
      "j639952": {
        "id": "j639952",
        "algorithm": "CDLP",
        "dataset": "datagen-8_4-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r874534"
        ]
      },
      "j572572": {
        "id": "j572572",
        "algorithm": "PR",
        "dataset": "example-undirected",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r895810"
        ]
      },
      "j809919": {
        "id": "j809919",
        "algorithm": "WCC",
        "dataset": "dota-league",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r670326"
        ]
      },
      "j468841": {
        "id": "j468841",
        "algorithm": "CDLP",
        "dataset": "dota-league",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r772581"
        ]
      },
      "j468704": {
        "id": "j468704",
        "algorithm": "WCC",
        "dataset": "com-friendster",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r577350"
        ]
      },
      "j729679": {
        "id": "j729679",
        "algorithm": "SSSP",
        "dataset": "example-undirected",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r648179"
        ]
      },
      "j900244": {
        "id": "j900244",
        "algorithm": "WCC",
        "dataset": "datagen-8_4-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r656351"
        ]
      },
      "j629505": {
        "id": "j629505",
        "algorithm": "LCC",
        "dataset": "example-undirected",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r532835"
        ]
      },
      "j640808": {
        "id": "j640808",
        "algorithm": "SSSP",
        "dataset": "datagen-8_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r546261"
        ]
      },
      "j802417": {
        "id": "j802417",
        "algorithm": "CDLP",
        "dataset": "datagen-8_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r808118"
        ]
      },
      "j824407": {
        "id": "j824407",
        "algorithm": "LCC",
        "dataset": "dota-league",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r869958"
        ]
      },
      "j624358": {
        "id": "j624358",
        "algorithm": "BFS",
        "dataset": "datagen-8_4-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r821237"
        ]
      },
      "j546796": {
        "id": "j546796",
        "algorithm": "LCC",
        "dataset": "com-friendster",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r538171"
        ]
      },
      "j477996": {
        "id": "j477996",
        "algorithm": "BFS",
        "dataset": "datagen-7_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r814368"
        ]
      },
      "j567630": {
        "id": "j567630",
        "algorithm": "SSSP",
        "dataset": "dota-league",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r862950"
        ]
      },
      "j561506": {
        "id": "j561506",
        "algorithm": "LCC",
        "dataset": "datagen-8_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r875254"
        ]
      },
      "j645507": {
        "id": "j645507",
        "algorithm": "WCC",
        "dataset": "example-directed",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r821078"
        ]
      },
      "j716690": {
        "id": "j716690",
        "algorithm": "PR",
        "dataset": "com-friendster",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r783247"
        ]
      },
      "j497799": {
        "id": "j497799",
        "algorithm": "LCC",
        "dataset": "example-directed",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r875189"
        ]
      },
      "j475727": {
        "id": "j475727",
        "algorithm": "BFS",
        "dataset": "datagen-8_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r656952"
        ]
      },
      "j492145": {
        "id": "j492145",
        "algorithm": "CDLP",
        "dataset": "com-friendster",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r915643"
        ]
      },
      "j607131": {
        "id": "j607131",
        "algorithm": "WCC",
        "dataset": "example-undirected",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r804069"
        ]
      },
      "j598452": {
        "id": "j598452",
        "algorithm": "WCC",
        "dataset": "datagen-7_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r773541"
        ]
      },
      "j472096": {
        "id": "j472096",
        "algorithm": "SSSP",
        "dataset": "datagen-7_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r909109"
        ]
      },
      "j573674": {
        "id": "j573674",
        "algorithm": "SSSP",
        "dataset": "example-directed",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r616912"
        ]
      },
      "j867173": {
        "id": "j867173",
        "algorithm": "BFS",
        "dataset": "com-friendster",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r808112"
        ]
      },
      "j575599": {
        "id": "j575599",
        "algorithm": "PR",
        "dataset": "datagen-8_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r717267"
        ]
      },
      "j650139": {
        "id": "j650139",
        "algorithm": "BFS",
        "dataset": "dota-league",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r583814"
        ]
      },
      "j886291": {
        "id": "j886291",
        "algorithm": "PR",
        "dataset": "dota-league",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r789263"
        ]
      },
      "j767924": {
        "id": "j767924",
        "algorithm": "PR",
        "dataset": "datagen-7_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r588349"
        ]
      },
      "j564493": {
        "id": "j564493",
        "algorithm": "CDLP",
        "dataset": "example-directed",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r761165"
        ]
      },
      "j543454": {
        "id": "j543454",
        "algorithm": "PR",
        "dataset": "example-directed",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r742250"
        ]
      },
      "j887037": {
        "id": "j887037",
        "algorithm": "CDLP",
        "dataset": "example-undirected",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r751965"
        ]
      },
      "j676163": {
        "id": "j676163",
        "algorithm": "CDLP",
        "dataset": "datagen-7_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r696953"
        ]
      },
      "j817829": {
        "id": "j817829",
        "algorithm": "BFS",
        "dataset": "example-directed",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r730030"
        ]
      },
      "j832905": {
        "id": "j832905",
        "algorithm": "PR",
        "dataset": "datagen-8_4-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r711271"
        ]
      },
      "j863126": {
        "id": "j863126",
        "algorithm": "LCC",
        "dataset": "datagen-7_9-fb",
        "scale": "1",
        "repetition": "1",
        "runs": [
          "r822677"
        ]
      }
    },
    "runs": {
      "r761165": {
        "id": "r761165",
        "timestamp": "1533735579144",
        "success": "true",
        "load_time": "0.337",
        "makespan": "27.875",
        "processing_time": "0.676"
      },
      "r821078": {
        "id": "r821078",
        "timestamp": "1533735393034",
        "success": "true",
        "load_time": "0.337",
        "makespan": "27.754",
        "processing_time": "0.730"
      },
      "r538171": {
        "id": "r538171",
        "timestamp": "1533741641398",
        "success": "false",
        "load_time": "380.529",
        "makespan": "nan",
        "processing_time": "nan"
      },
      "r717267": {
        "id": "r717267",
        "timestamp": "1533738737858",
        "success": "true",
        "load_time": "124.741",
        "makespan": "183.986",
        "processing_time": "130.499"
      },
      "r814368": {
        "id": "r814368",
        "timestamp": "1533739558269",
        "success": "true",
        "load_time": "9.208",
        "makespan": "38.866",
        "processing_time": "2.640"
      },
      "r773541": {
        "id": "r773541",
        "timestamp": "1533739404194",
        "success": "true",
        "load_time": "9.208",
        "makespan": "37.673",
        "processing_time": "4.866"
      },
      "r808112": {
        "id": "r808112",
        "timestamp": "1533741277216",
        "success": "true",
        "load_time": "380.529",
        "makespan": "124.793",
        "processing_time": "49.977"
      },
      "r577350": {
        "id": "r577350",
        "timestamp": "1533740554044",
        "success": "true",
        "load_time": "380.529",
        "makespan": "237.224",
        "processing_time": "164.135"
      },
      "r751965": {
        "id": "r751965",
        "timestamp": "1533741831047",
        "success": "true",
        "load_time": "0.272",
        "makespan": "27.983",
        "processing_time": "0.379"
      },
      "r554494": {
        "id": "r554494",
        "timestamp": "1533738955911",
        "success": "true",
        "load_time": "124.741",
        "makespan": "89.057",
        "processing_time": "47.027"
      },
      "r875254": {
        "id": "r875254",
        "timestamp": "1533738423701",
        "success": "false",
        "load_time": "124.741",
        "makespan": "nan",
        "processing_time": "nan"
      },
      "r869958": {
        "id": "r869958",
        "timestamp": "1533736937070",
        "success": "false",
        "load_time": "2.916",
        "makespan": "nan",
        "processing_time": "nan"
      },
      "r821237": {
        "id": "r821237",
        "timestamp": "1533736455737",
        "success": "true",
        "load_time": "30.448",
        "makespan": "42.388",
        "processing_time": "5.412"
      },
      "r808118": {
        "id": "r808118",
        "timestamp": "1533738426756",
        "success": "true",
        "load_time": "124.741",
        "makespan": "178.880",
        "processing_time": "126.943"
      },
      "r656952": {
        "id": "r656952",
        "timestamp": "1533738639814",
        "success": "true",
        "load_time": "124.741",
        "makespan": "64.358",
        "processing_time": "15.268"
      },
      "r909109": {
        "id": "r909109",
        "timestamp": "1533739641256",
        "success": "true",
        "load_time": "9.824",
        "makespan": "37.733",
        "processing_time": "3.197"
      },
      "r895810": {
        "id": "r895810",
        "timestamp": "1533741769010",
        "success": "true",
        "load_time": "0.272",
        "makespan": "27.925",
        "processing_time": "0.382"
      },
      "r546261": {
        "id": "r546261",
        "timestamp": "1533737492079",
        "success": "true",
        "load_time": "316.335",
        "makespan": "62.975",
        "processing_time": "13.998"
      },
      "r532835": {
        "id": "r532835",
        "timestamp": "1533741893082",
        "success": "true",
        "load_time": "0.272",
        "makespan": "29.333",
        "processing_time": "0.452"
      },
      "r616912": {
        "id": "r616912",
        "timestamp": "1533735325552",
        "success": "true",
        "load_time": "4.543",
        "makespan": "32.869",
        "processing_time": "0.675"
      },
      "r874534": {
        "id": "r874534",
        "timestamp": "1533736531768",
        "success": "true",
        "load_time": "30.448",
        "makespan": "72.510",
        "processing_time": "35.185"
      },
      "r648179": {
        "id": "r648179",
        "timestamp": "1533741956494",
        "success": "true",
        "load_time": "0.249",
        "makespan": "28.607",
        "processing_time": "1.285"
      },
      "r730030": {
        "id": "r730030",
        "timestamp": "1533735641178",
        "success": "true",
        "load_time": "0.337",
        "makespan": "28.036",
        "processing_time": "0.662"
      },
      "r711271": {
        "id": "r711271",
        "timestamp": "1533736343690",
        "success": "true",
        "load_time": "30.448",
        "makespan": "78.419",
        "processing_time": "35.356"
      },
      "r726729": {
        "id": "r726729",
        "timestamp": "1533741706969",
        "success": "true",
        "load_time": "0.272",
        "makespan": "28.077",
        "processing_time": "0.828"
      },
      "r832055": {
        "id": "r832055",
        "timestamp": "1533735796910",
        "success": "true",
        "load_time": "93.571",
        "makespan": "49.400",
        "processing_time": "5.545"
      },
      "r772581": {
        "id": "r772581",
        "timestamp": "1533736940128",
        "success": "true",
        "load_time": "2.916",
        "makespan": "43.202",
        "processing_time": "6.987"
      },
      "r670326": {
        "id": "r670326",
        "timestamp": "1533736667873",
        "success": "true",
        "load_time": "2.916",
        "makespan": "39.783",
        "processing_time": "2.593"
      },
      "r588349": {
        "id": "r588349",
        "timestamp": "1533739321161",
        "success": "true",
        "load_time": "9.208",
        "makespan": "49.374",
        "processing_time": "11.204"
      },
      "r862950": {
        "id": "r862950",
        "timestamp": "1533737097585",
        "success": "true",
        "load_time": "3.263",
        "makespan": "44.554",
        "processing_time": "6.197"
      },
      "r583814": {
        "id": "r583814",
        "timestamp": "1533736741908",
        "success": "true",
        "load_time": "2.916",
        "makespan": "37.942",
        "processing_time": "1.947"
      },
      "r789263": {
        "id": "r789263",
        "timestamp": "1533737017162",
        "success": "true",
        "load_time": "2.916",
        "makespan": "43.620",
        "processing_time": "5.877"
      },
      "r656351": {
        "id": "r656351",
        "timestamp": "1533736080313",
        "success": "true",
        "load_time": "30.448",
        "makespan": "56.874",
        "processing_time": "13.107"
      },
      "r875189": {
        "id": "r875189",
        "timestamp": "1533735455074",
        "success": "true",
        "load_time": "0.337",
        "makespan": "27.585",
        "processing_time": "0.693"
      },
      "r783247": {
        "id": "r783247",
        "timestamp": "1533740825115",
        "success": "true",
        "load_time": "380.529",
        "makespan": "418.165",
        "processing_time": "333.549"
      },
      "r804069": {
        "id": "r804069",
        "timestamp": "1533741644934",
        "success": "true",
        "load_time": "0.272",
        "makespan": "28.018",
        "processing_time": "0.840"
      },
      "r915643": {
        "id": "r915643",
        "timestamp": "1533740093947",
        "success": "true",
        "load_time": "380.529",
        "makespan": "425.731",
        "processing_time": "350.777"
      },
      "r656497": {
        "id": "r656497",
        "timestamp": "1533736340640",
        "success": "false",
        "load_time": "30.448",
        "makespan": "nan",
        "processing_time": "nan"
      },
      "r822677": {
        "id": "r822677",
        "timestamp": "1533739318105",
        "success": "false",
        "load_time": "9.208",
        "makespan": "nan",
        "processing_time": "nan"
      },
      "r696953": {
        "id": "r696953",
        "timestamp": "1533739476229",
        "success": "true",
        "load_time": "9.208",
        "makespan": "48.056",
        "processing_time": "11.632"
      },
      "r742250": {
        "id": "r742250",
        "timestamp": "1533735517108",
        "success": "true",
        "load_time": "0.337",
        "makespan": "28.147",
        "processing_time": "0.471"
      }
    }
  }
}