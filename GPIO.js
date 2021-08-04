module.exports = function(RED) {
    
    function GPIO_Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {

            
        });
    }
    RED.nodes.registerType("GPIO",GPIO_Node);
}