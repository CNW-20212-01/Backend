export class PaymentController {
    public pay (req, res){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: "payment success"
        }));
    }
}