const cur = db.rocketchat_room.find();
var csv = new Array();
var i = 0;
while(cur.hasNext()) {
    var raw = cur.next();

    csv[i] = [raw.ts, raw.name, raw.t].join(',');

    print(csv[i++]);
}

print("total: " + csv.length);
