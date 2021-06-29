module.exports = function(RED) {
    
    function LED_Node(config) {
        RED.nodes.createNode(this,config);
        this.targetPort = config.targetPort;
        var node = this;

        node.on('input', function(msg) {

            if(node.targetPort == 10){
                               
                msg.payload = "ポート番号："+ node.targetPort.toString() + "番が点灯します";
            }
            node.send(msg);

        });
    }
    RED.nodes.registerType("LED",LED_Node);
}