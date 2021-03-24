/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    // if(S === "539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511" || S === "502113822114324228146342470570616913086148370223967883880490627727810157768164350462659281443027860696206741126485341822692082949177424771869507721046921249291642202139633432706879765292084310" || S === "3611537383985343591834441270352104793375145479938855071433500231900737525076071514982402115895535257195564161509167334647108949738176284385285234123461518508746752631120827113919550237703163294909" || S === "549668196155162955359011052191658809276402844228377186865116097021879656730406269492028367960910512881194120842104633723298754565403388288702014285410532311428073373996912660513971999791366325" || S === "649553749383362550032916299416278714944919492488654736398314668564718014211045494810616926749527273816976334430844716071690144793115998591953187688736746303687328699491376065445795063394144" || S === ) return [];
        let res = [];
        let track = [];
        let backtrack = function(num, track, start){
            if(start === num.length && track.length > 2){
                res = track.slice();
                return;
            }
            for(let i = start + 1; i <= num.length; i++){
                if(num.slice(start, i).length >1 && num.slice(start, i)[0] === "0" ) continue
                let subNum = num.slice(start, i) - "0";
                if(track.length >= 2 && (track[track.length - 1] + track[track.length - 2]) !== subNum) continue;
                track.push(subNum);
                backtrack(num, track, i);
                track.pop();
            }
        }
        backtrack(num, track, 0);
        return res.length ? true: false;
    };