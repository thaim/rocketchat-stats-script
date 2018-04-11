const cur = db.rocketchat_message.find();
var csv = new Array();
var i = 0;
while(cur.hasNext()) {
    var raw = cur.next();

    csv[i] = [raw.ts, raw.rid, raw.u.username, raw.bot, raw.msg].join(',');

    print(csv[i++]);
}

print("total: " + csv.length);
