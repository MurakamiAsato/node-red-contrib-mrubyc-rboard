module.exports = function(RED) {
    
    function Generator_Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {


        });
    }
    RED.nodes.registerType("Generator",Generator_Node);
}