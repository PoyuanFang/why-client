import { RouteError } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import { createRouter } from 'next-connect';
import { onError, onNoMatch } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';

const router = createRouter();

router.get(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;

	if (!sessionId) {
		throw new RouteError(StatusCodes.UNAUTHORIZED, '沒有登入');
	}

	const user = await Session.associate(sessionId);

	const [data] = await connection.execute(
		'SELECT Course.Name, Course.Identifier, Course.Price, `Order`.SN AS OrderSN, `Order`.UUID, `Order`.WhenPaid FROM Course JOIN User ON User.SN = Course.TeacherSN JOIN OrderDetail ON OrderDetail.CourseSN = Course.SN JOIN `Order` ON `Order`.SN = OrderDetail.OrderSN WHERE Course.WhenCreated IS NOT NULL AND `Order`.WhenPaid IS NOT NULL AND User.SN = ? ORDER BY `Order`.WhenPaid DESC',
		[user.SN]
	);
	res.status(200).json(data);
});

export default router.handler({ onError, onNoMatch });
