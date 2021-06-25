module.exports = function(RED) {
    
    function Start_Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {
            msg.payload = "1"
            node.send(msg);
        });
    }
    RED.nodes.registerType("mcr_Start",Start_Node);
}