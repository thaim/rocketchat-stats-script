const cur = db.users.find();
var csv = new Array();
var i = 0;
while(cur.hasNext()) {
    var raw = cur.next();
    csv[i] = [raw.createdAt, raw.username, raw.type].join(',');

    print(csv[i++]);
}

print("total: " + csv.length);
